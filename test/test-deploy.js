const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
  // let simpleStorageFactory
  // let simpleStorage
  let simpleStorageFactory, simpleStorage
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieveDonors()
    const expectedValue = ""
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue)
    // expect(currentValue.toString()).to.equal(expectedValue)
  })

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieveRecipients()
    const expectedValue = ""
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue)
    // expect(currentValue.toString()).to.equal(expectedValue)
  })

  it("Should update when we call store", async function () {
    
    const transactionResponse = await simpleStorage.createNewDonor("Tejas",19,"Chennai-Navalur","Bpos","kidney","18","kamatchi")
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieveDonors()
    const expectedValue = "Tejas,19,Chennai-Navalur,Bpos,kidney,18,kamatchi"
    assert.equal(currentValue.toString(), expectedValue)
  })

  it("Should update when we call store", async function () {
    
    const transactionResponse = await simpleStorage.createNewRecipient("Alex",23,"Uththandi","Bpos","kidney","kamatchi");
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieveRecipients()
    const expectedValue="Alex,23,Uththandi,Bpos,kidney,kamatchi"
    assert.equal(currentValue.toString(), expectedValue)
  })

  // Extra - this is not in the video
  // it("Should work correctly with the people struct and array", async function () {
  //   const expectedPersonName = "Patrick"
  //   const expectedFavoriteNumber = "16"
  //   const transactionResponse = await simpleStorage.addPerson(
  //     expectedPersonName,
  //     expectedFavoriteNumber
  //   )
  //   await transactionResponse.wait(1)
  //   const { favoriteNumber, name } = await simpleStorage.people(0)
  //   // We could also do it like this
  //   // const person = await simpleStorage.people(0)
  //   // const favNumber = person.favoriteNumber
  //   // const pName = person.name

  //   assert.equal(name, expectedPersonName)
  //   assert.equal(favoriteNumber, expectedFavoriteNumber)
  // })
})