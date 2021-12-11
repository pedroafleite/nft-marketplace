const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Market", function () {
  let market;
  let nft;
  let owner;
  let listingPrice;
  let nftContractAddress;
  let nftToken;
  let nftToken2;
  // Set action price
  const auctionPrice = ethers.utils.parseUnits("1", "ether");

  beforeEach(async function () {
    // Set the NFTMarket Contract
    const Market = await ethers.getContractFactory("NFTMarket");
    [owner, addr1, addr2] = await ethers.getSigners();
    market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    // Set the NFT Contract
    const NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    nftContractAddress = nft.address;

    // Create two test NFTs
    nftToken = await nft.createToken("https://www.mytokenlocation.com");
    nftToken2 = await nft.createToken("https://www.mytokenlocation2.com");
  });

  describe("Deployment of contracts", function () {
    it("Should set the right owner to NFTMarket Contract", async function () {
      expect(await market.signer.address).to.equal(owner.address);
    });
    it("Should set the right owner to NFT Contract", async function () {
      expect(await nft.signer.address).to.equal(owner.address);
    });
  });

  describe("Testing functions", function () {
    it("Should list prices", async function () {
      listingPrice = await market.getListingPrice();
      listingPrice = listingPrice.toString();
      expect(await listingPrice).to.be.a("string");
      expect(await listingPrice).to.equal("25000000000000000");
    });

    it("Should create two NFTs", async function () {
      expect(await nftToken.value.toString()).to.equal("0");
      expect(await nftToken2.value.toString()).to.equal("0");
      expect(await nftToken.from).to.equal(nft.signer.address);
      expect(await nftToken2.from).to.equal(nft.signer.address);
    });

    it("Should create two NFT Market Items", async function () {
      let item1 = await market.createMarketItem(
        nftContractAddress,
        1,
        auctionPrice,
        {
          value: listingPrice,
        }
      );
      let item2 = await market.createMarketItem(
        nftContractAddress,
        2,
        auctionPrice,
        {
          value: listingPrice,
        }
      );
      console.log(marketAddress);
      console.log(nftContractAddress);
      expect(await item1.from).to.equal(nft.signer.address);
      expect(await item2.from).to.equal(nft.signer.address);
    });
  });
});
