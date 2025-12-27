// tuples - arrays with fixed length & types
const rgbColor: [number, number, number] = [255, 125, 254];

type HttpResponse = [number, string];
const goodRes: HttpResponse = [200, "ok, Getting proper response"];
// goodRes[0] = "test";

// enums - define set of named constant, reuse in code
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;
