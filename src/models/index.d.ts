import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UntitledModel {
  readonly id: string;
  readonly chatName?: string | null;
  readonly enterchat?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}