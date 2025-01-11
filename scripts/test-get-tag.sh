#!/usr/bin/env bash

commit_message="release: feature add typescript, --beta"
if [[ $commit_message =~ --([a-zA-Z0-9_-]+)$ ]]; then
    tag=${BASH_REMATCH[1]}
    echo "tag: $tag"
fi
