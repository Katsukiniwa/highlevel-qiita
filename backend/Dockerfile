ARG RUBY_VERSION=3.2.3

FROM ruby:$RUBY_VERSION-slim

RUN apt-get update -qq && apt-get install -y \
      build-essential \
      libvips \
      gnupg2 \
      libpq-dev

WORKDIR /app

COPY . .

RUN bundle install

RUN rm -f tmp/pids/server.pid

CMD ["bin/rails", "server"]
