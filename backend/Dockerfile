# syntax=docker/dockerfile:1
FROM python:3.9-slim-bullseye
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY . /backend
RUN pip install -r requirements.txt

