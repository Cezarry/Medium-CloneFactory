//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract ExampleContract {
    uint256 public constant num1 = 10;
    uint256 public constant num2 = 20;
    uint256 public constant num3 = 30;
    uint256 public constant num4 = 40;
    uint256 public constant num5 = 50;
    string public constant testString1 = "Just some test string 1";
    string public constant testString2 = "Just some test string 2";
    string public constant testString3 = "Just some test string 3";
    string public constant testString4 = "Just some test string 4";
    string public constant testString5 = "Just some test string 5";

    uint256 public constant constantNumber = 1;
    uint256 public immutable immutableNumber;
    uint256 public number = 128;

    constructor() {
        immutableNumber = 2;
    }

    function initializeContract() external {
        number = 128;
    }

    function setNumber(uint256 _number) external {
        number = _number;
    }

    function someFunction1() external {
        for(uint i = 0; i < 100; i++) {
            number = i + 1;
        }
    }
    
    function someFunction2() external {
        for(uint i = 0; i < 200; i++) {
            number = i + 2;
        }
    }
        
    function someFunction3() external {
        for(uint i = 0; i < 300; i++) {
            number = i + 3;
        }
    }

    function someFunction4() external {
        for(uint i = 0; i < 400; i++) {
            number = i + 4;
        }
    }

    function someFunction5() external {
        for(uint i = 0; i < 500; i++) {
            number = i + 5;
        }
    }
}
