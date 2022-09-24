//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "./ExampleContract.sol";

contract FactoryByNewInstance {
    ExampleContract[] public contracts;

    function createNewInstance() external {
        ExampleContract newContract = new ExampleContract();
        contracts.push(newContract);
    }

    function getContracts() external view returns(ExampleContract[] memory) {
        return contracts;
    }
}
