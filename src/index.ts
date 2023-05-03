import { iot, auth, mqtt } from 'aws-iot-device-sdk-v2';
function buildClient() {
  const configBuilder = iot.AwsIotMqttConnectionConfigBuilder.new_with_websockets({
    region: 'us-west-2',
    credentials_provider: auth.AwsCredentialsProvider.newDefault(), 
  });
  configBuilder.with_certificate_authority_from_path(__dirname + 'certs/root-CA.crt');
  configBuilder.with_clean_session(false);
  configBuilder.with_client_id('malexMacTest');
  configBuilder.with_endpoint('a3liatn838czuh-ats.iot.us-west-2.amazonaws.com');
  const config = configBuilder.build();
  return new mqtt.MqttClient().new_connection(config);

}
async function main(): Promise<void> {
  const iotClient = buildClient();
}