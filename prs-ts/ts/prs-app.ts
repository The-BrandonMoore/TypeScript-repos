import { User } from "./user.class";
import { Product } from "./product.class";
import { Vendor } from "./vendor.class";
import { Request } from "./request.class";
import promptSync from "prompt-sync";
const prompt = promptSync();

let u1 = new User(
  1,
  "ronparks",
  "password1",
  "Ron",
  "Swanson",
  "740-000-9900",
  "email",
  false,
  false
);
let u2 = new User(
  2,
  "ritapars",
  "password2",
  "Chris",
  "Barry",
  "740-888-9990",
  "email",
  false,
  false
);
let u3 = new User(
  2,
  "parksplace",
  "password3",
  "Seth",
  "MacFarlane",
  "740-999-9911",
  "email",
  true,
  false
);
let u4 = new User(
  4,
  "veryparky",
  "password4",
  "Adam",
  "Sandler",
  "740-887-6678",
  "email",
  false,
  true
);
let u5 = new User(
  5,
  "sparkles",
  "password5",
  "Ryan",
  "Hoyt",
  "740-444-6759",
  "email",
  false,
  false
);

let userList: User[] = [u1, u2, u3, u4, u5];

let v1 = new Vendor(
  1,
  "Tech Supplies Inc.",
  "123 Tech Lane",
  "San Francisco",
  "CA",
  "94105",
  "415-555-0199",
  "contact@techsupplies.com"
);

let v2 = new Vendor(
  2,
  "Office Goods",
  "456 Business Blvd",
  "Los Angeles",
  "CA",
  "90001",
  "323-555-0145",
  "support@officegoods.com"
);

let v3 = new Vendor(
  3,
  "Electro World",
  "789 Innovation St",
  "Austin",
  "TX",
  "78701",
  "512-555-0123",
  "sales@electroworld.com"
);

let v4 = new Vendor(
  4,
  "Gadget Central",
  "101 Device Dr",
  "New York",
  "NY",
  "10001",
  "212-555-0100",
  "info@gadgetcentral.com"
);

let v5 = new Vendor(
  5,
  "Supply Hub",
  "202 Warehouse Way",
  "Chicago",
  "IL",
  "60601",
  "312-555-0168",
  "service@supplyhub.com"
);

let vendorList = [v1, v2, v3, v4, v5];

let p1 = new Product(
  1,
  v5,
  "P001",
  "Wireless Mouse",
  25.99,
  "each",
  "/images/wireless-mouse.jpg"
);
let p2 = new Product(
  2,
  v4,
  "P002",
  "Keyboard",
  45.49,
  "each",
  "/images/keyboard.jpg"
);
let p3 = new Product(
  3,
  v3,
  "P003",
  "Monitor",
  150.75,
  "each",
  "/images/monitor.jpg"
);
let p4 = new Product(
  4,
  v2,
  "P004",
  "USB Hub",
  15.99,
  "each",
  "/images/usb-hub.jpg"
);
let p5 = new Product(
  5,
  v1,
  "P005",
  "Laptop Stand",
  32.5,
  "each",
  "/images/laptop-stand.jpg"
);

let productList: Product[] = [p1, p2, p3, p4, p5];

let r1 = new Request(
  1,
  u1,
  "REQ-001",
  "Purchase of office supplies",
  "Supplies needed for Q4 operations",
  new Date("2024-11-15"),
  "Ground",
  "New",
  250.75,
  new Date("2024-10-25")
);

let r2 = new Request(
  2,
  u2,
  "REQ-002",
  "Upgrade computer systems",
  "Old systems causing performance issues",
  new Date("2024-12-01"),
  "Air",
  "Pending",
  1500.0,
  new Date("2024-10-26"),
  "Awaiting approval from management"
);

let r3 = new Request(
  3,
  u3,
  "REQ-003",
  "Purchase of new chairs",
  "To replace broken chairs in meeting rooms",
  new Date("2024-11-20"),
  "Ground",
  "Rejected",
  300.0,
  new Date("2024-10-27"),
  "Insufficient budget for Q4"
);

let r4 = new Request(
  4,
  u4,
  "REQ-004",
  "Renew software licenses",
  "Annual renewal for productivity software",
  new Date("2024-11-30"),
  "Email",
  "Approved",
  1200.0,
  new Date("2024-10-27")
);

let r5 = new Request(
  5,
  u5,
  "REQ-005",
  "Order promotional materials",
  "Materials needed for upcoming trade show",
  new Date("2024-11-18"),
  "Courier",
  "Pending",
  750.0,
  new Date("2024-10-28")
);

let requests = [r1, r2, r3, r4, r5];

//get user input
console.log("\nGet values for a User: ");
console.log("================================");

let id: number = parseInt(prompt("ID: "));
console.log("ID: ", id);
let username: string = prompt("Username: ");
let password: string = prompt("Password: ");
let firstName: string = prompt("First Name: ");
let lastName: string = prompt("Last Name: ");
let phoneNumber: string = prompt("Phone Number: ");
let email: string = prompt("Email: ");

let u6: User = new User(
  id,
  username,
  password,
  firstName,
  lastName,
  phoneNumber,
  email
);
userList.push(u6);

console.log("\nUsers: ");
console.log("=============");

userList.forEach((user) => {
  console.log(user);
});
