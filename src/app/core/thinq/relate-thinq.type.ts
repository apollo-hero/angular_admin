/* eslint-disable @typescript-eslint/naming-convention */
export interface RelationshipOptions {
  ClassName: string;
  CssClass: string;
  Enabled: number;
  Icon: string;
  InverseRelationshipName: string;
  RelationshipId: number;
  RelationshipName: string;
}

export interface RelationshipActionParam {
  RelationshipId: number;
  TargetId: number;
}
