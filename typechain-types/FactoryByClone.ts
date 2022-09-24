/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface FactoryByCloneInterface extends utils.Interface {
  functions: {
    "baseExampleContract()": FunctionFragment;
    "cloneContract()": FunctionFragment;
    "contracts(uint256)": FunctionFragment;
    "getContracts()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "baseExampleContract"
      | "cloneContract"
      | "contracts"
      | "getContracts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "baseExampleContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cloneContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contracts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getContracts",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "baseExampleContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cloneContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contracts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContracts",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FactoryByClone extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryByCloneInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    baseExampleContract(overrides?: CallOverrides): Promise<[string]>;

    cloneContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getContracts(overrides?: CallOverrides): Promise<[string[]]>;
  };

  baseExampleContract(overrides?: CallOverrides): Promise<string>;

  cloneContract(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contracts(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getContracts(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    baseExampleContract(overrides?: CallOverrides): Promise<string>;

    cloneContract(overrides?: CallOverrides): Promise<void>;

    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getContracts(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    baseExampleContract(overrides?: CallOverrides): Promise<BigNumber>;

    cloneContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContracts(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    baseExampleContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cloneContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}