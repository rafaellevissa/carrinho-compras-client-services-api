#!/bin/bash

compose_files=("$(find . -name docker-compose.yml -type f)")

for file in "${compose_files[@]}"; do
    docker compose -f "$file" up --build
done
