FROM ruby:3.0.2

WORKDIR /app

# Add packages
RUN apt-get update && apt-get install -y \
      git \
      vim

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

RUN rm -f tmp/pids/server.pid
CMD ["bin/rails", "server", "-b", "0.0.0.0"]
