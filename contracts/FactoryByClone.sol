//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "./ExampleContract.sol";
import "./CloneFactory.sol";

contract FactoryByClone is CloneFactory {
    address public baseExampleContract;
    ExampleContract[] public contracts;

    constructor(address _baseExampleContract) {
        baseExampleContract = _baseExampleContract;
    }

    function cloneContract() external {
        ExampleContract clonedContract = ExampleContract(createClone(baseExampleContract));
        clonedContract.initializeContract();
        contracts.push(clonedContract);
    }

    function getContracts() external view returns(ExampleContract[] memory) {
        return contracts;
    }
}
