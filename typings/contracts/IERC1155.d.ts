/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class IERC1155 extends Contract {
  functions: {
    balanceOf(
      _owner: string,
      _id: number | string | BigNumber
    ): Promise<BigNumber>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (number | string | BigNumber)[]
    ): Promise<(BigNumber)[]>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string | BigNumber,
      _value: number | string | BigNumber,
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (number | string | BigNumber)[],
      _values: (number | string | BigNumber)[],
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };
  filters: {
    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _value: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _values: null
    ): EventFilter;

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    URI(_id: number | string | BigNumber | null, _value: null): EventFilter;

    Name(_id: number | string | BigNumber | null, _value: null): EventFilter;
  };
}