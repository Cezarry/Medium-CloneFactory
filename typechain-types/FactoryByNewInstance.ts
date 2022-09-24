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

export interface FactoryByNewInstanceInterface extends utils.Interface {
  functions: {
    "contracts(uint256)": FunctionFragment;
    "createNewInstance()": FunctionFragment;
    "getContracts()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "contracts" | "createNewInstance" | "getContracts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contracts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createNewInstance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContracts",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "contracts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createNewInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContracts",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FactoryByNewInstance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryByNewInstanceInterface;

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
    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createNewInstance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContracts(overrides?: CallOverrides): Promise<[string[]]>;
  };

  contracts(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createNewInstance(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContracts(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createNewInstance(overrides?: CallOverrides): Promise<void>;

    getContracts(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createNewInstance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContracts(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createNewInstance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}