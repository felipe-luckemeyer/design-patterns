const SOCKET_ENUM = {
  AM4: {
    cpu: "Ryzen 7 5700X",
    motherboard: "X570",
  },
  LGA1700: {
    cpu: "I7 12700K",
    motherboard: "Z690",
  },
};

function computerFactory(socket) {
  let computer = {};

  computer = mountComputer();

  // private
  function mountComputer() {
    return {
      cpu: SOCKET_ENUM[socket].cpu,
      motherboard: SOCKET_ENUM[socket].motherboard,
      gpu: "RX 6750XT",
      ram: "32GB(4x8) 3600mhz ddr4",
      psu: "850w Modular 80 Plus Gold",
      case: "H510 Flow",
    };
  }

  // public
  function powerOn() {
    return "power on";
  }
  // public
  function powerOff() {
    return "power off";
  }
  return {
    ...computer,
    powerOn,
    powerOff,
  };
}

let computerA = computerFactory("AM4");
let computerB = computerFactory("LGA1700");

console.log("computerA", computerA);
console.log("computerA", computerA.powerOn());
console.log("computerA", computerA.powerOff());
