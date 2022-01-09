resource "aws_codepipeline" "deploy" {
  name = "${local.name}-deploy"
  role_arn = aws_iam_role.codepipeline.arn

  artifact_store {
    location = aws_s3_bucket.codepipeline.bucket
    type = "S3"
  }

  stage {
    name = "Source"

    action {
      name = "Source"
      category = "Source"
      owner = "AWS"
      provider = "ECR"
      version  = "1"
      output_artifacts = ["source_endpoint"]

      configuration = {
        RepositoryName = aws_ecr_repository.rails.name
        ImageTag = "latest"
      }
    }
  }

  stage {
    name = "Build"

    action {
      name = "BuildRails"
      category = "Build"
      owner = "AWS"
      provider = "CodeBuild"
      input_artifacts = ["source_output"]
      output_artifacts = ["build_output"]
      version = "1"

      configuration = {
        ProjectName = aws_codebuild_project.build.name
      }
    }
  }

  stage {
    name = "Deploy"

    action {
      name = "Deploy"
      category = "Deploy"
      owner = "AWS"
      provider = "CodeDeployToECS"
      version = "1"
      input_artifacts = ["source_output", "build_output"]

      configuration = {
        ApplicationName = aws_codedeploy_app.app.name
        DeploymentGroupName = aws_codedeploy_deployment_group.app.deployment_group_name
        TaskDefinitionTemplateArtifact = "build_output"
        TaskDefinitionTemplatePath = "task_definition.json"
        AppSpecTemplateArtifact = "build_output"
        AppSpecTemplatePath = "./files/appspec.yml"
        Image1Artifact = "source_output"
        Image1ContainerName = "IMAGE1_NAME"
      }
    }
  }
}
