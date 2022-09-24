import { expect } from "chai";
import { ethers } from "hardhat";
import { FactoryByNewInstance } from "../typechain-types";

describe("FactoryByNewInstance tests", function () {
  const number = 128;
  let factory: FactoryByNewInstance;

  beforeEach(async () => {
    const factoryContract = await ethers.getContractFactory(
      "FactoryByNewInstance"
    );
    factory = await factoryContract.deploy();
    await factory.deployed();
  });
  it("Should create new instance of ExampleContract", async function () {
    await factory.createNewInstance();
    const contracts = await factory.getContracts();
    const newInstanceAddress = contracts[0];
    const newInstanceContract = await ethers.getContractAt(
      "ExampleContract",
      newInstanceAddress
    );
    const newInstanceNumber = await newInstanceContract.number();
    expect(newInstanceAddress).not.eq(ethers.constants.AddressZero);
    expect(newInstanceNumber).to.eq(number);
  });
  it("Should create new instance of ExampleContract and set new number", async function () {
    await factory.createNewInstance();
    const contracts = await factory.getContracts();
    const newInstanceAddress = contracts[0];
    const newInstanceContract = await ethers.getContractAt(
      "ExampleContract",
      newInstanceAddress
    );
    const newNumber = 256;
    await newInstanceContract.setNumber(newNumber);
    const newInstanceNumber = await newInstanceContract.number();
    expect(newInstanceNumber).to.eq(newNumber);
  });
});
