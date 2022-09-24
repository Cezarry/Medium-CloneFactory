import { expect } from "chai";
import { ethers } from "hardhat";
import { FactoryByClone, ExampleContract } from "../typechain-types";

describe("FactoryByClone tests", function () {
  const number = 128;
  const constantNumber = 1;
  const immutableNumber = 2;
  let factory: FactoryByClone;
  let base: ExampleContract;

  beforeEach(async () => {
    const baseContract = await ethers.getContractFactory("ExampleContract");
    base = await baseContract.deploy();
    await base.deployed();

    const factoryContract = await ethers.getContractFactory("FactoryByClone");
    factory = await factoryContract.deploy(base.address);
    await factory.deployed();
  });
  it("Should clone ExampleContract", async function () {
    await factory.cloneContract();
    const contracts = await factory.getContracts();
    const newInstanceAddress = contracts[0];
    const newInstanceContract = await ethers.getContractAt(
      "ExampleContract",
      newInstanceAddress
    );
    const newInstanceNumber = await newInstanceContract.number();
    const newInstanceConstantNumber =
      await newInstanceContract.constantNumber();
    const newInstanceImmutableNumber =
      await newInstanceContract.immutableNumber();
    expect(newInstanceAddress).not.eq(ethers.constants.AddressZero);
    expect(newInstanceNumber).to.eq(number);
    expect(newInstanceConstantNumber).to.eq(constantNumber);
    expect(newInstanceImmutableNumber).to.eq(immutableNumber);
  });
  it("Should clone ExampleContract and set new number", async function () {
    await factory.cloneContract();
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
