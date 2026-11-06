#!/bin/bash
# ==============================================================================
# LearnProof AI - LiveKit Service Setup Template (Sanitized)
# NOTE: All production keys and domains have been replaced with placeholders.
# ==============================================================================
set -e

echo "LiveKit configuration template for local development..."

mkdir -p ./livekit
cat << 'YAMLEOF' > ./livekit/livekit.yaml
port: 7880
bind_addresses:
  - ""
rtc:
  tcp_port: 7881
  udp_port: 7882
  use_external_ip: false
keys:
  learnproof_dev_key: learnproof_dev_secret_localhost_placeholder
logging:
  json: false
  level: info
YAMLEOF

echo "LiveKit template generated in ./livekit/livekit.yaml."

