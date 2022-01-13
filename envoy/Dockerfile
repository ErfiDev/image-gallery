FROM envoyproxy/envoy:v1.21-latest

COPY ./config.yaml /etc/envoy/envoy.yaml

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml