import { grpc } from '@improbable-eng/grpc-web'

// Import code-generated data structures.
import { Devices } from '@/lib/sni/sni_pb_service'
import { DevicesRequest } from '@/lib/sni/sni_pb'

const host = "http://localhost:8190";

export const ListDevices = () => {
  const req = new DevicesRequest();
  grpc.unary(Devices.ListDevices, {
      request: req,
      host: host,
      onEnd: res => {
          const { status, statusMessage, headers, message, trailers } = res;
          if (status === grpc.Code.OK && message) {
              console.log("all ok. got devices: ", message.toObject());
          }
      }
  });
}
