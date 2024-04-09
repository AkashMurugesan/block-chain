import { expect } from "chai";
import { ethers } from "hardhat";

describe("Mikey", function () {
  it("mint", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Mikey");
    const hardhatToken = await Token.deploy();
    expect(await hardhatToken.safeMint(owner.address, 0));
  });

  it("balance check", async function () {
    const [owner, mem] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Mikey");
    const hardhatToken = await Token.deploy();
    expect(await hardhatToken.balanceOf(owner.address)).to.equal(0);
  });
});
