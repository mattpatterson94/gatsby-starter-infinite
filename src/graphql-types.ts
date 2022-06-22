export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  GatsbyImageData: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AvifOptions = {
  lossless: InputMaybe<Scalars["Boolean"]>
  quality: InputMaybe<Scalars["Int"]>
  speed: InputMaybe<Scalars["Int"]>
}

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars["Int"]>
}

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars["Boolean"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
  ne: InputMaybe<Scalars["Boolean"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>
}

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars["Date"]>
  gt: InputMaybe<Scalars["Date"]>
  gte: InputMaybe<Scalars["Date"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
  lt: InputMaybe<Scalars["Date"]>
  lte: InputMaybe<Scalars["Date"]>
  ne: InputMaybe<Scalars["Date"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>
}

export type Directory = Node & {
  __typename?: "Directory"
  absolutePath: Scalars["String"]
  accessTime: Scalars["Date"]
  atime: Scalars["Date"]
  atimeMs: Scalars["Float"]
  base: Scalars["String"]
  birthTime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>
  changeTime: Scalars["Date"]
  children: Array<Node>
  ctime: Scalars["Date"]
  ctimeMs: Scalars["Float"]
  dev: Scalars["Int"]
  dir: Scalars["String"]
  ext: Scalars["String"]
  extension: Scalars["String"]
  gid: Scalars["Int"]
  id: Scalars["ID"]
  ino: Scalars["Float"]
  internal: Internal
  mode: Scalars["Int"]
  modifiedTime: Scalars["Date"]
  mtime: Scalars["Date"]
  mtimeMs: Scalars["Float"]
  name: Scalars["String"]
  nlink: Scalars["Int"]
  parent: Maybe<Node>
  prettySize: Scalars["String"]
  rdev: Scalars["Int"]
  relativeDirectory: Scalars["String"]
  relativePath: Scalars["String"]
  root: Scalars["String"]
  size: Scalars["Int"]
  sourceInstanceName: Scalars["String"]
  uid: Scalars["Int"]
}

export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type DirectoryConnection = {
  __typename?: "DirectoryConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<DirectoryEdge>
  group: Array<DirectoryGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: "DirectoryEdge"
  next: Maybe<Directory>
  node: Directory
  previous: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  absolutePath = "absolutePath",
  accessTime = "accessTime",
  atime = "atime",
  atimeMs = "atimeMs",
  base = "base",
  birthTime = "birthTime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  changeTime = "changeTime",
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  ctime = "ctime",
  ctimeMs = "ctimeMs",
  dev = "dev",
  dir = "dir",
  ext = "ext",
  extension = "extension",
  gid = "gid",
  id = "id",
  ino = "ino",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  mode = "mode",
  modifiedTime = "modifiedTime",
  mtime = "mtime",
  mtimeMs = "mtimeMs",
  name = "name",
  nlink = "nlink",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  prettySize = "prettySize",
  rdev = "rdev",
  relativeDirectory = "relativeDirectory",
  relativePath = "relativePath",
  root = "root",
  size = "size",
  sourceInstanceName = "sourceInstanceName",
  uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<DirectoryEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<DirectoryGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars["String"]
  opacity: InputMaybe<Scalars["Int"]>
  shadow: Scalars["String"]
}

export type File = Node & {
  __typename?: "File"
  absolutePath: Scalars["String"]
  accessTime: Scalars["Date"]
  atime: Scalars["Date"]
  atimeMs: Scalars["Float"]
  base: Scalars["String"]
  birthTime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>
  blksize: Maybe<Scalars["Int"]>
  blocks: Maybe<Scalars["Int"]>
  changeTime: Scalars["Date"]
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>
  children: Array<Node>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>
  ctime: Scalars["Date"]
  ctimeMs: Scalars["Float"]
  dev: Scalars["Int"]
  dir: Scalars["String"]
  ext: Scalars["String"]
  extension: Scalars["String"]
  gid: Scalars["Int"]
  id: Scalars["ID"]
  ino: Scalars["Float"]
  internal: Internal
  mode: Scalars["Int"]
  modifiedTime: Scalars["Date"]
  mtime: Scalars["Date"]
  mtimeMs: Scalars["Float"]
  name: Scalars["String"]
  nlink: Scalars["Int"]
  parent: Maybe<Node>
  prettySize: Scalars["String"]
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars["String"]>
  rdev: Scalars["Int"]
  relativeDirectory: Scalars["String"]
  relativePath: Scalars["String"]
  root: Scalars["String"]
  size: Scalars["Int"]
  sourceInstanceName: Scalars["String"]
  uid: Scalars["Int"]
}

export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileAtimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileCtimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileMtimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type FileConnection = {
  __typename?: "FileConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<FileEdge>
  group: Array<FileGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<File>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: "FileEdge"
  next: Maybe<File>
  node: File
  previous: Maybe<File>
}

export enum FileFieldsEnum {
  absolutePath = "absolutePath",
  accessTime = "accessTime",
  atime = "atime",
  atimeMs = "atimeMs",
  base = "base",
  birthTime = "birthTime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  changeTime = "changeTime",
  childImageSharp___children = "childImageSharp___children",
  childImageSharp___children___children = "childImageSharp___children___children",
  childImageSharp___children___children___children = "childImageSharp___children___children___children",
  childImageSharp___children___children___id = "childImageSharp___children___children___id",
  childImageSharp___children___id = "childImageSharp___children___id",
  childImageSharp___children___internal___content = "childImageSharp___children___internal___content",
  childImageSharp___children___internal___contentDigest = "childImageSharp___children___internal___contentDigest",
  childImageSharp___children___internal___description = "childImageSharp___children___internal___description",
  childImageSharp___children___internal___fieldOwners = "childImageSharp___children___internal___fieldOwners",
  childImageSharp___children___internal___ignoreType = "childImageSharp___children___internal___ignoreType",
  childImageSharp___children___internal___mediaType = "childImageSharp___children___internal___mediaType",
  childImageSharp___children___internal___owner = "childImageSharp___children___internal___owner",
  childImageSharp___children___internal___type = "childImageSharp___children___internal___type",
  childImageSharp___children___parent___children = "childImageSharp___children___parent___children",
  childImageSharp___children___parent___id = "childImageSharp___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___aspectRatio = "childImageSharp___fixed___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___base64 = "childImageSharp___fixed___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___height = "childImageSharp___fixed___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___originalName = "childImageSharp___fixed___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___src = "childImageSharp___fixed___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___srcSet = "childImageSharp___fixed___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___srcSetWebp = "childImageSharp___fixed___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___srcWebp = "childImageSharp___fixed___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___tracedSVG = "childImageSharp___fixed___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fixed___width = "childImageSharp___fixed___width",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___aspectRatio = "childImageSharp___fluid___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___base64 = "childImageSharp___fluid___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___originalImg = "childImageSharp___fluid___originalImg",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___originalName = "childImageSharp___fluid___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___presentationHeight = "childImageSharp___fluid___presentationHeight",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___presentationWidth = "childImageSharp___fluid___presentationWidth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___sizes = "childImageSharp___fluid___sizes",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___src = "childImageSharp___fluid___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___srcSet = "childImageSharp___fluid___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___srcSetWebp = "childImageSharp___fluid___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___srcWebp = "childImageSharp___fluid___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___fluid___tracedSVG = "childImageSharp___fluid___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___gatsbyImageData = "childImageSharp___gatsbyImageData",
  childImageSharp___id = "childImageSharp___id",
  childImageSharp___internal___content = "childImageSharp___internal___content",
  childImageSharp___internal___contentDigest = "childImageSharp___internal___contentDigest",
  childImageSharp___internal___description = "childImageSharp___internal___description",
  childImageSharp___internal___fieldOwners = "childImageSharp___internal___fieldOwners",
  childImageSharp___internal___ignoreType = "childImageSharp___internal___ignoreType",
  childImageSharp___internal___mediaType = "childImageSharp___internal___mediaType",
  childImageSharp___internal___owner = "childImageSharp___internal___owner",
  childImageSharp___internal___type = "childImageSharp___internal___type",
  childImageSharp___original___height = "childImageSharp___original___height",
  childImageSharp___original___src = "childImageSharp___original___src",
  childImageSharp___original___width = "childImageSharp___original___width",
  childImageSharp___parent___children = "childImageSharp___parent___children",
  childImageSharp___parent___children___children = "childImageSharp___parent___children___children",
  childImageSharp___parent___children___id = "childImageSharp___parent___children___id",
  childImageSharp___parent___id = "childImageSharp___parent___id",
  childImageSharp___parent___internal___content = "childImageSharp___parent___internal___content",
  childImageSharp___parent___internal___contentDigest = "childImageSharp___parent___internal___contentDigest",
  childImageSharp___parent___internal___description = "childImageSharp___parent___internal___description",
  childImageSharp___parent___internal___fieldOwners = "childImageSharp___parent___internal___fieldOwners",
  childImageSharp___parent___internal___ignoreType = "childImageSharp___parent___internal___ignoreType",
  childImageSharp___parent___internal___mediaType = "childImageSharp___parent___internal___mediaType",
  childImageSharp___parent___internal___owner = "childImageSharp___parent___internal___owner",
  childImageSharp___parent___internal___type = "childImageSharp___parent___internal___type",
  childImageSharp___parent___parent___children = "childImageSharp___parent___parent___children",
  childImageSharp___parent___parent___id = "childImageSharp___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___aspectRatio = "childImageSharp___resize___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___height = "childImageSharp___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___originalName = "childImageSharp___resize___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___src = "childImageSharp___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___tracedSVG = "childImageSharp___resize___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childImageSharp___resize___width = "childImageSharp___resize___width",
  childMarkdownRemark___children = "childMarkdownRemark___children",
  childMarkdownRemark___children___children = "childMarkdownRemark___children___children",
  childMarkdownRemark___children___children___children = "childMarkdownRemark___children___children___children",
  childMarkdownRemark___children___children___id = "childMarkdownRemark___children___children___id",
  childMarkdownRemark___children___id = "childMarkdownRemark___children___id",
  childMarkdownRemark___children___internal___content = "childMarkdownRemark___children___internal___content",
  childMarkdownRemark___children___internal___contentDigest = "childMarkdownRemark___children___internal___contentDigest",
  childMarkdownRemark___children___internal___description = "childMarkdownRemark___children___internal___description",
  childMarkdownRemark___children___internal___fieldOwners = "childMarkdownRemark___children___internal___fieldOwners",
  childMarkdownRemark___children___internal___ignoreType = "childMarkdownRemark___children___internal___ignoreType",
  childMarkdownRemark___children___internal___mediaType = "childMarkdownRemark___children___internal___mediaType",
  childMarkdownRemark___children___internal___owner = "childMarkdownRemark___children___internal___owner",
  childMarkdownRemark___children___internal___type = "childMarkdownRemark___children___internal___type",
  childMarkdownRemark___children___parent___children = "childMarkdownRemark___children___parent___children",
  childMarkdownRemark___children___parent___id = "childMarkdownRemark___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___excerpt = "childMarkdownRemark___excerpt",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___excerptAst = "childMarkdownRemark___excerptAst",
  childMarkdownRemark___fileAbsolutePath = "childMarkdownRemark___fileAbsolutePath",
  childMarkdownRemark___frontmatter___description = "childMarkdownRemark___frontmatter___description",
  childMarkdownRemark___frontmatter___slug = "childMarkdownRemark___frontmatter___slug",
  childMarkdownRemark___frontmatter___title = "childMarkdownRemark___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___gatsbyPath = "childMarkdownRemark___gatsbyPath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings = "childMarkdownRemark___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___depth = "childMarkdownRemark___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___id = "childMarkdownRemark___headings___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___headings___value = "childMarkdownRemark___headings___value",
  childMarkdownRemark___html = "childMarkdownRemark___html",
  childMarkdownRemark___htmlAst = "childMarkdownRemark___htmlAst",
  childMarkdownRemark___id = "childMarkdownRemark___id",
  childMarkdownRemark___internal___content = "childMarkdownRemark___internal___content",
  childMarkdownRemark___internal___contentDigest = "childMarkdownRemark___internal___contentDigest",
  childMarkdownRemark___internal___description = "childMarkdownRemark___internal___description",
  childMarkdownRemark___internal___fieldOwners = "childMarkdownRemark___internal___fieldOwners",
  childMarkdownRemark___internal___ignoreType = "childMarkdownRemark___internal___ignoreType",
  childMarkdownRemark___internal___mediaType = "childMarkdownRemark___internal___mediaType",
  childMarkdownRemark___internal___owner = "childMarkdownRemark___internal___owner",
  childMarkdownRemark___internal___type = "childMarkdownRemark___internal___type",
  childMarkdownRemark___parent___children = "childMarkdownRemark___parent___children",
  childMarkdownRemark___parent___children___children = "childMarkdownRemark___parent___children___children",
  childMarkdownRemark___parent___children___id = "childMarkdownRemark___parent___children___id",
  childMarkdownRemark___parent___id = "childMarkdownRemark___parent___id",
  childMarkdownRemark___parent___internal___content = "childMarkdownRemark___parent___internal___content",
  childMarkdownRemark___parent___internal___contentDigest = "childMarkdownRemark___parent___internal___contentDigest",
  childMarkdownRemark___parent___internal___description = "childMarkdownRemark___parent___internal___description",
  childMarkdownRemark___parent___internal___fieldOwners = "childMarkdownRemark___parent___internal___fieldOwners",
  childMarkdownRemark___parent___internal___ignoreType = "childMarkdownRemark___parent___internal___ignoreType",
  childMarkdownRemark___parent___internal___mediaType = "childMarkdownRemark___parent___internal___mediaType",
  childMarkdownRemark___parent___internal___owner = "childMarkdownRemark___parent___internal___owner",
  childMarkdownRemark___parent___internal___type = "childMarkdownRemark___parent___internal___type",
  childMarkdownRemark___parent___parent___children = "childMarkdownRemark___parent___parent___children",
  childMarkdownRemark___parent___parent___id = "childMarkdownRemark___parent___parent___id",
  childMarkdownRemark___rawMarkdownBody = "childMarkdownRemark___rawMarkdownBody",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childMarkdownRemark___tableOfContents = "childMarkdownRemark___tableOfContents",
  childMarkdownRemark___timeToRead = "childMarkdownRemark___timeToRead",
  childMarkdownRemark___wordCount___paragraphs = "childMarkdownRemark___wordCount___paragraphs",
  childMarkdownRemark___wordCount___sentences = "childMarkdownRemark___wordCount___sentences",
  childMarkdownRemark___wordCount___words = "childMarkdownRemark___wordCount___words",
  children = "children",
  childrenImageSharp = "childrenImageSharp",
  childrenImageSharp___children = "childrenImageSharp___children",
  childrenImageSharp___children___children = "childrenImageSharp___children___children",
  childrenImageSharp___children___children___children = "childrenImageSharp___children___children___children",
  childrenImageSharp___children___children___id = "childrenImageSharp___children___children___id",
  childrenImageSharp___children___id = "childrenImageSharp___children___id",
  childrenImageSharp___children___internal___content = "childrenImageSharp___children___internal___content",
  childrenImageSharp___children___internal___contentDigest = "childrenImageSharp___children___internal___contentDigest",
  childrenImageSharp___children___internal___description = "childrenImageSharp___children___internal___description",
  childrenImageSharp___children___internal___fieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  childrenImageSharp___children___internal___ignoreType = "childrenImageSharp___children___internal___ignoreType",
  childrenImageSharp___children___internal___mediaType = "childrenImageSharp___children___internal___mediaType",
  childrenImageSharp___children___internal___owner = "childrenImageSharp___children___internal___owner",
  childrenImageSharp___children___internal___type = "childrenImageSharp___children___internal___type",
  childrenImageSharp___children___parent___children = "childrenImageSharp___children___parent___children",
  childrenImageSharp___children___parent___id = "childrenImageSharp___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___aspectRatio = "childrenImageSharp___fixed___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___base64 = "childrenImageSharp___fixed___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___height = "childrenImageSharp___fixed___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___originalName = "childrenImageSharp___fixed___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___src = "childrenImageSharp___fixed___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___srcSet = "childrenImageSharp___fixed___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___srcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___srcWebp = "childrenImageSharp___fixed___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___tracedSVG = "childrenImageSharp___fixed___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fixed___width = "childrenImageSharp___fixed___width",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___aspectRatio = "childrenImageSharp___fluid___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___base64 = "childrenImageSharp___fluid___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___originalImg = "childrenImageSharp___fluid___originalImg",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___originalName = "childrenImageSharp___fluid___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___presentationHeight = "childrenImageSharp___fluid___presentationHeight",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___presentationWidth = "childrenImageSharp___fluid___presentationWidth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___sizes = "childrenImageSharp___fluid___sizes",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___src = "childrenImageSharp___fluid___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___srcSet = "childrenImageSharp___fluid___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___srcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___srcWebp = "childrenImageSharp___fluid___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___fluid___tracedSVG = "childrenImageSharp___fluid___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___gatsbyImageData = "childrenImageSharp___gatsbyImageData",
  childrenImageSharp___id = "childrenImageSharp___id",
  childrenImageSharp___internal___content = "childrenImageSharp___internal___content",
  childrenImageSharp___internal___contentDigest = "childrenImageSharp___internal___contentDigest",
  childrenImageSharp___internal___description = "childrenImageSharp___internal___description",
  childrenImageSharp___internal___fieldOwners = "childrenImageSharp___internal___fieldOwners",
  childrenImageSharp___internal___ignoreType = "childrenImageSharp___internal___ignoreType",
  childrenImageSharp___internal___mediaType = "childrenImageSharp___internal___mediaType",
  childrenImageSharp___internal___owner = "childrenImageSharp___internal___owner",
  childrenImageSharp___internal___type = "childrenImageSharp___internal___type",
  childrenImageSharp___original___height = "childrenImageSharp___original___height",
  childrenImageSharp___original___src = "childrenImageSharp___original___src",
  childrenImageSharp___original___width = "childrenImageSharp___original___width",
  childrenImageSharp___parent___children = "childrenImageSharp___parent___children",
  childrenImageSharp___parent___children___children = "childrenImageSharp___parent___children___children",
  childrenImageSharp___parent___children___id = "childrenImageSharp___parent___children___id",
  childrenImageSharp___parent___id = "childrenImageSharp___parent___id",
  childrenImageSharp___parent___internal___content = "childrenImageSharp___parent___internal___content",
  childrenImageSharp___parent___internal___contentDigest = "childrenImageSharp___parent___internal___contentDigest",
  childrenImageSharp___parent___internal___description = "childrenImageSharp___parent___internal___description",
  childrenImageSharp___parent___internal___fieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  childrenImageSharp___parent___internal___ignoreType = "childrenImageSharp___parent___internal___ignoreType",
  childrenImageSharp___parent___internal___mediaType = "childrenImageSharp___parent___internal___mediaType",
  childrenImageSharp___parent___internal___owner = "childrenImageSharp___parent___internal___owner",
  childrenImageSharp___parent___internal___type = "childrenImageSharp___parent___internal___type",
  childrenImageSharp___parent___parent___children = "childrenImageSharp___parent___parent___children",
  childrenImageSharp___parent___parent___id = "childrenImageSharp___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___aspectRatio = "childrenImageSharp___resize___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___height = "childrenImageSharp___resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___originalName = "childrenImageSharp___resize___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___src = "childrenImageSharp___resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___tracedSVG = "childrenImageSharp___resize___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenImageSharp___resize___width = "childrenImageSharp___resize___width",
  childrenMarkdownRemark = "childrenMarkdownRemark",
  childrenMarkdownRemark___children = "childrenMarkdownRemark___children",
  childrenMarkdownRemark___children___children = "childrenMarkdownRemark___children___children",
  childrenMarkdownRemark___children___children___children = "childrenMarkdownRemark___children___children___children",
  childrenMarkdownRemark___children___children___id = "childrenMarkdownRemark___children___children___id",
  childrenMarkdownRemark___children___id = "childrenMarkdownRemark___children___id",
  childrenMarkdownRemark___children___internal___content = "childrenMarkdownRemark___children___internal___content",
  childrenMarkdownRemark___children___internal___contentDigest = "childrenMarkdownRemark___children___internal___contentDigest",
  childrenMarkdownRemark___children___internal___description = "childrenMarkdownRemark___children___internal___description",
  childrenMarkdownRemark___children___internal___fieldOwners = "childrenMarkdownRemark___children___internal___fieldOwners",
  childrenMarkdownRemark___children___internal___ignoreType = "childrenMarkdownRemark___children___internal___ignoreType",
  childrenMarkdownRemark___children___internal___mediaType = "childrenMarkdownRemark___children___internal___mediaType",
  childrenMarkdownRemark___children___internal___owner = "childrenMarkdownRemark___children___internal___owner",
  childrenMarkdownRemark___children___internal___type = "childrenMarkdownRemark___children___internal___type",
  childrenMarkdownRemark___children___parent___children = "childrenMarkdownRemark___children___parent___children",
  childrenMarkdownRemark___children___parent___id = "childrenMarkdownRemark___children___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___excerpt = "childrenMarkdownRemark___excerpt",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___excerptAst = "childrenMarkdownRemark___excerptAst",
  childrenMarkdownRemark___fileAbsolutePath = "childrenMarkdownRemark___fileAbsolutePath",
  childrenMarkdownRemark___frontmatter___description = "childrenMarkdownRemark___frontmatter___description",
  childrenMarkdownRemark___frontmatter___slug = "childrenMarkdownRemark___frontmatter___slug",
  childrenMarkdownRemark___frontmatter___title = "childrenMarkdownRemark___frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___gatsbyPath = "childrenMarkdownRemark___gatsbyPath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings = "childrenMarkdownRemark___headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___depth = "childrenMarkdownRemark___headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___id = "childrenMarkdownRemark___headings___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___headings___value = "childrenMarkdownRemark___headings___value",
  childrenMarkdownRemark___html = "childrenMarkdownRemark___html",
  childrenMarkdownRemark___htmlAst = "childrenMarkdownRemark___htmlAst",
  childrenMarkdownRemark___id = "childrenMarkdownRemark___id",
  childrenMarkdownRemark___internal___content = "childrenMarkdownRemark___internal___content",
  childrenMarkdownRemark___internal___contentDigest = "childrenMarkdownRemark___internal___contentDigest",
  childrenMarkdownRemark___internal___description = "childrenMarkdownRemark___internal___description",
  childrenMarkdownRemark___internal___fieldOwners = "childrenMarkdownRemark___internal___fieldOwners",
  childrenMarkdownRemark___internal___ignoreType = "childrenMarkdownRemark___internal___ignoreType",
  childrenMarkdownRemark___internal___mediaType = "childrenMarkdownRemark___internal___mediaType",
  childrenMarkdownRemark___internal___owner = "childrenMarkdownRemark___internal___owner",
  childrenMarkdownRemark___internal___type = "childrenMarkdownRemark___internal___type",
  childrenMarkdownRemark___parent___children = "childrenMarkdownRemark___parent___children",
  childrenMarkdownRemark___parent___children___children = "childrenMarkdownRemark___parent___children___children",
  childrenMarkdownRemark___parent___children___id = "childrenMarkdownRemark___parent___children___id",
  childrenMarkdownRemark___parent___id = "childrenMarkdownRemark___parent___id",
  childrenMarkdownRemark___parent___internal___content = "childrenMarkdownRemark___parent___internal___content",
  childrenMarkdownRemark___parent___internal___contentDigest = "childrenMarkdownRemark___parent___internal___contentDigest",
  childrenMarkdownRemark___parent___internal___description = "childrenMarkdownRemark___parent___internal___description",
  childrenMarkdownRemark___parent___internal___fieldOwners = "childrenMarkdownRemark___parent___internal___fieldOwners",
  childrenMarkdownRemark___parent___internal___ignoreType = "childrenMarkdownRemark___parent___internal___ignoreType",
  childrenMarkdownRemark___parent___internal___mediaType = "childrenMarkdownRemark___parent___internal___mediaType",
  childrenMarkdownRemark___parent___internal___owner = "childrenMarkdownRemark___parent___internal___owner",
  childrenMarkdownRemark___parent___internal___type = "childrenMarkdownRemark___parent___internal___type",
  childrenMarkdownRemark___parent___parent___children = "childrenMarkdownRemark___parent___parent___children",
  childrenMarkdownRemark___parent___parent___id = "childrenMarkdownRemark___parent___parent___id",
  childrenMarkdownRemark___rawMarkdownBody = "childrenMarkdownRemark___rawMarkdownBody",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  childrenMarkdownRemark___tableOfContents = "childrenMarkdownRemark___tableOfContents",
  childrenMarkdownRemark___timeToRead = "childrenMarkdownRemark___timeToRead",
  childrenMarkdownRemark___wordCount___paragraphs = "childrenMarkdownRemark___wordCount___paragraphs",
  childrenMarkdownRemark___wordCount___sentences = "childrenMarkdownRemark___wordCount___sentences",
  childrenMarkdownRemark___wordCount___words = "childrenMarkdownRemark___wordCount___words",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  ctime = "ctime",
  ctimeMs = "ctimeMs",
  dev = "dev",
  dir = "dir",
  ext = "ext",
  extension = "extension",
  gid = "gid",
  id = "id",
  ino = "ino",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  mode = "mode",
  modifiedTime = "modifiedTime",
  mtime = "mtime",
  mtimeMs = "mtimeMs",
  name = "name",
  nlink = "nlink",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  prettySize = "prettySize",
  publicURL = "publicURL",
  rdev = "rdev",
  relativeDirectory = "relativeDirectory",
  relativePath = "relativePath",
  root = "root",
  size = "size",
  sourceInstanceName = "sourceInstanceName",
  uid = "uid",
}

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  childImageSharp: InputMaybe<ImageSharpFilterInput>
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>
  children: InputMaybe<NodeFilterListInput>
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  publicURL: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
  __typename?: "FileGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<FileEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<FileGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<File>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars["Float"]>
  gt: InputMaybe<Scalars["Float"]>
  gte: InputMaybe<Scalars["Float"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  lt: InputMaybe<Scalars["Float"]>
  lte: InputMaybe<Scalars["Float"]>
  ne: InputMaybe<Scalars["Float"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
}

export type GatsbyImageDataQueryOperatorInput = {
  eq: InputMaybe<Scalars["GatsbyImageData"]>
  in: InputMaybe<Array<InputMaybe<Scalars["GatsbyImageData"]>>>
  ne: InputMaybe<Scalars["GatsbyImageData"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["GatsbyImageData"]>>>
}

export enum GatsbyImageFormat {
  AUTO = "AUTO",
  AVIF = "AVIF",
  JPG = "JPG",
  NO_CHANGE = "NO_CHANGE",
  PNG = "PNG",
  WEBP = "WEBP",
}

export enum GatsbyImageLayout {
  CONSTRAINED = "CONSTRAINED",
  FIXED = "FIXED",
  FULL_WIDTH = "FULL_WIDTH",
}

export enum GatsbyImagePlaceholder {
  BLURRED = "BLURRED",
  DOMINANT_COLOR = "DOMINANT_COLOR",
  NONE = "NONE",
  TRACED_SVG = "TRACED_SVG",
}

export enum ImageCropFocus {
  ATTENTION = "ATTENTION",
  CENTER = "CENTER",
  EAST = "EAST",
  ENTROPY = "ENTROPY",
  NORTH = "NORTH",
  NORTHEAST = "NORTHEAST",
  NORTHWEST = "NORTHWEST",
  SOUTH = "SOUTH",
  SOUTHEAST = "SOUTHEAST",
  SOUTHWEST = "SOUTHWEST",
  WEST = "WEST",
}

export enum ImageFit {
  CONTAIN = "CONTAIN",
  COVER = "COVER",
  FILL = "FILL",
  INSIDE = "INSIDE",
  OUTSIDE = "OUTSIDE",
}

export enum ImageFormat {
  AUTO = "AUTO",
  AVIF = "AVIF",
  JPG = "JPG",
  NO_CHANGE = "NO_CHANGE",
  PNG = "PNG",
  WEBP = "WEBP",
}

export enum ImageLayout {
  CONSTRAINED = "CONSTRAINED",
  FIXED = "FIXED",
  FULL_WIDTH = "FULL_WIDTH",
}

export enum ImagePlaceholder {
  BLURRED = "BLURRED",
  DOMINANT_COLOR = "DOMINANT_COLOR",
  NONE = "NONE",
  TRACED_SVG = "TRACED_SVG",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp"
  children: Array<Node>
  fixed: Maybe<ImageSharpFixed>
  fluid: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars["GatsbyImageData"]
  id: Scalars["ID"]
  internal: Internal
  original: Maybe<ImageSharpOriginal>
  parent: Maybe<Node>
  resize: Maybe<ImageSharpResize>
}

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars["String"]>
  base64Width: InputMaybe<Scalars["Int"]>
  cropFocus?: InputMaybe<ImageCropFocus>
  duotone: InputMaybe<DuotoneGradient>
  fit?: InputMaybe<ImageFit>
  grayscale?: InputMaybe<Scalars["Boolean"]>
  height: InputMaybe<Scalars["Int"]>
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>
  jpegQuality: InputMaybe<Scalars["Int"]>
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>
  pngQuality: InputMaybe<Scalars["Int"]>
  quality: InputMaybe<Scalars["Int"]>
  rotate?: InputMaybe<Scalars["Int"]>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  traceSVG: InputMaybe<Potrace>
  trim?: InputMaybe<Scalars["Float"]>
  webpQuality: InputMaybe<Scalars["Int"]>
  width: InputMaybe<Scalars["Int"]>
}

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars["String"]>
  base64Width: InputMaybe<Scalars["Int"]>
  cropFocus?: InputMaybe<ImageCropFocus>
  duotone: InputMaybe<DuotoneGradient>
  fit?: InputMaybe<ImageFit>
  grayscale?: InputMaybe<Scalars["Boolean"]>
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>
  jpegQuality: InputMaybe<Scalars["Int"]>
  maxHeight: InputMaybe<Scalars["Int"]>
  maxWidth: InputMaybe<Scalars["Int"]>
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>
  pngQuality: InputMaybe<Scalars["Int"]>
  quality: InputMaybe<Scalars["Int"]>
  rotate?: InputMaybe<Scalars["Int"]>
  sizes?: InputMaybe<Scalars["String"]>
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  traceSVG: InputMaybe<Potrace>
  trim?: InputMaybe<Scalars["Float"]>
  webpQuality: InputMaybe<Scalars["Int"]>
}

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars["Float"]>
  avifOptions: InputMaybe<AvifOptions>
  backgroundColor: InputMaybe<Scalars["String"]>
  blurredOptions: InputMaybe<BlurredOptions>
  breakpoints: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>
  height: InputMaybe<Scalars["Int"]>
  jpgOptions: InputMaybe<JpgOptions>
  layout?: InputMaybe<ImageLayout>
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>
  placeholder: InputMaybe<ImagePlaceholder>
  pngOptions: InputMaybe<PngOptions>
  quality: InputMaybe<Scalars["Int"]>
  sizes: InputMaybe<Scalars["String"]>
  tracedSVGOptions: InputMaybe<Potrace>
  transformOptions: InputMaybe<TransformOptions>
  webpOptions: InputMaybe<WebPOptions>
  width: InputMaybe<Scalars["Int"]>
}

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars["String"]>
  base64?: InputMaybe<Scalars["Boolean"]>
  cropFocus?: InputMaybe<ImageCropFocus>
  duotone: InputMaybe<DuotoneGradient>
  fit?: InputMaybe<ImageFit>
  grayscale?: InputMaybe<Scalars["Boolean"]>
  height: InputMaybe<Scalars["Int"]>
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>
  jpegQuality: InputMaybe<Scalars["Int"]>
  pngCompressionLevel?: InputMaybe<Scalars["Int"]>
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>
  pngQuality: InputMaybe<Scalars["Int"]>
  quality: InputMaybe<Scalars["Int"]>
  rotate?: InputMaybe<Scalars["Int"]>
  toFormat?: InputMaybe<ImageFormat>
  traceSVG: InputMaybe<Potrace>
  trim?: InputMaybe<Scalars["Float"]>
  webpQuality: InputMaybe<Scalars["Int"]>
  width: InputMaybe<Scalars["Int"]>
}

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<ImageSharpEdge>
  group: Array<ImageSharpGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge"
  next: Maybe<ImageSharp>
  node: ImageSharp
  previous: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___aspectRatio = "fixed___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___base64 = "fixed___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___height = "fixed___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___originalName = "fixed___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___src = "fixed___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcSet = "fixed___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcSetWebp = "fixed___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___srcWebp = "fixed___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___tracedSVG = "fixed___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fixed___width = "fixed___width",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___aspectRatio = "fluid___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___base64 = "fluid___base64",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___originalImg = "fluid___originalImg",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___originalName = "fluid___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___presentationHeight = "fluid___presentationHeight",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___presentationWidth = "fluid___presentationWidth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___sizes = "fluid___sizes",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___src = "fluid___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcSet = "fluid___srcSet",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcSetWebp = "fluid___srcSetWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___srcWebp = "fluid___srcWebp",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  fluid___tracedSVG = "fluid___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  gatsbyImageData = "gatsbyImageData",
  id = "id",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  original___height = "original___height",
  original___src = "original___src",
  original___width = "original___width",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___aspectRatio = "resize___aspectRatio",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___height = "resize___height",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___originalName = "resize___originalName",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___src = "resize___src",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___tracedSVG = "resize___tracedSVG",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  resize___width = "resize___width",
}

export type ImageSharpFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  fixed: InputMaybe<ImageSharpFixedFilterInput>
  fluid: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  original: InputMaybe<ImageSharpOriginalFilterInput>
  parent: InputMaybe<NodeFilterInput>
  resize: InputMaybe<ImageSharpResizeFilterInput>
}

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed"
  aspectRatio: Maybe<Scalars["Float"]>
  base64: Maybe<Scalars["String"]>
  height: Scalars["Float"]
  originalName: Maybe<Scalars["String"]>
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcSetWebp: Maybe<Scalars["String"]>
  srcWebp: Maybe<Scalars["String"]>
  tracedSVG: Maybe<Scalars["String"]>
  width: Scalars["Float"]
}

export type ImageSharpFixedFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>
  base64: InputMaybe<StringQueryOperatorInput>
  height: InputMaybe<FloatQueryOperatorInput>
  originalName: InputMaybe<StringQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
  srcSet: InputMaybe<StringQueryOperatorInput>
  srcSetWebp: InputMaybe<StringQueryOperatorInput>
  srcWebp: InputMaybe<StringQueryOperatorInput>
  tracedSVG: InputMaybe<StringQueryOperatorInput>
  width: InputMaybe<FloatQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid"
  aspectRatio: Scalars["Float"]
  base64: Maybe<Scalars["String"]>
  originalImg: Maybe<Scalars["String"]>
  originalName: Maybe<Scalars["String"]>
  presentationHeight: Scalars["Int"]
  presentationWidth: Scalars["Int"]
  sizes: Scalars["String"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcSetWebp: Maybe<Scalars["String"]>
  srcWebp: Maybe<Scalars["String"]>
  tracedSVG: Maybe<Scalars["String"]>
}

export type ImageSharpFluidFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>
  base64: InputMaybe<StringQueryOperatorInput>
  originalImg: InputMaybe<StringQueryOperatorInput>
  originalName: InputMaybe<StringQueryOperatorInput>
  presentationHeight: InputMaybe<IntQueryOperatorInput>
  presentationWidth: InputMaybe<IntQueryOperatorInput>
  sizes: InputMaybe<StringQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
  srcSet: InputMaybe<StringQueryOperatorInput>
  srcSetWebp: InputMaybe<StringQueryOperatorInput>
  srcWebp: InputMaybe<StringQueryOperatorInput>
  tracedSVG: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<ImageSharpEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<ImageSharpGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal"
  height: Maybe<Scalars["Float"]>
  src: Maybe<Scalars["String"]>
  width: Maybe<Scalars["Float"]>
}

export type ImageSharpOriginalFilterInput = {
  height: InputMaybe<FloatQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
  width: InputMaybe<FloatQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: "ImageSharpResize"
  aspectRatio: Maybe<Scalars["Float"]>
  height: Maybe<Scalars["Int"]>
  originalName: Maybe<Scalars["String"]>
  src: Maybe<Scalars["String"]>
  tracedSVG: Maybe<Scalars["String"]>
  width: Maybe<Scalars["Int"]>
}

export type ImageSharpResizeFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>
  height: InputMaybe<IntQueryOperatorInput>
  originalName: InputMaybe<StringQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
  tracedSVG: InputMaybe<StringQueryOperatorInput>
  width: InputMaybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars["Int"]>
  gt: InputMaybe<Scalars["Int"]>
  gte: InputMaybe<Scalars["Int"]>
  in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  lt: InputMaybe<Scalars["Int"]>
  lte: InputMaybe<Scalars["Int"]>
  ne: InputMaybe<Scalars["Int"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
}

export type Internal = {
  __typename?: "Internal"
  content: Maybe<Scalars["String"]>
  contentDigest: Scalars["String"]
  description: Maybe<Scalars["String"]>
  fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>
  ignoreType: Maybe<Scalars["Boolean"]>
  mediaType: Maybe<Scalars["String"]>
  owner: Scalars["String"]
  type: Scalars["String"]
}

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>
  contentDigest: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  fieldOwners: InputMaybe<StringQueryOperatorInput>
  ignoreType: InputMaybe<BooleanQueryOperatorInput>
  mediaType: InputMaybe<StringQueryOperatorInput>
  owner: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type JpgOptions = {
  progressive: InputMaybe<Scalars["Boolean"]>
  quality: InputMaybe<Scalars["Int"]>
}

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars["JSON"]>
  glob: InputMaybe<Scalars["JSON"]>
  in: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  ne: InputMaybe<Scalars["JSON"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>
  regex: InputMaybe<Scalars["JSON"]>
}

export enum MarkdownExcerptFormats {
  HTML = "HTML",
  MARKDOWN = "MARKDOWN",
  PLAIN = "PLAIN",
}

export type MarkdownHeading = {
  __typename?: "MarkdownHeading"
  depth: Maybe<Scalars["Int"]>
  id: Maybe<Scalars["String"]>
  value: Maybe<Scalars["String"]>
}

export type MarkdownHeadingFilterInput = {
  depth: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  value: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch: InputMaybe<MarkdownHeadingFilterInput>
}

export enum MarkdownHeadingLevels {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export type MarkdownRemark = Node & {
  __typename?: "MarkdownRemark"
  children: Array<Node>
  excerpt: Maybe<Scalars["String"]>
  excerptAst: Maybe<Scalars["JSON"]>
  fileAbsolutePath: Maybe<Scalars["String"]>
  frontmatter: Maybe<MarkdownRemarkFrontmatter>
  gatsbyPath: Maybe<Scalars["String"]>
  headings: Maybe<Array<Maybe<MarkdownHeading>>>
  html: Maybe<Scalars["String"]>
  htmlAst: Maybe<Scalars["JSON"]>
  id: Scalars["ID"]
  internal: Internal
  parent: Maybe<Node>
  rawMarkdownBody: Maybe<Scalars["String"]>
  tableOfContents: Maybe<Scalars["String"]>
  timeToRead: Maybe<Scalars["Int"]>
  wordCount: Maybe<MarkdownWordCount>
}

export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>
  pruneLength?: InputMaybe<Scalars["Int"]>
  truncate?: InputMaybe<Scalars["Boolean"]>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars["Int"]>
  truncate?: InputMaybe<Scalars["Boolean"]>
}

export type MarkdownRemarkGatsbyPathArgs = {
  filePath: InputMaybe<Scalars["String"]>
}

export type MarkdownRemarkHeadingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars["Boolean"]>
  heading: InputMaybe<Scalars["String"]>
  maxDepth: InputMaybe<Scalars["Int"]>
  pathToSlugField?: InputMaybe<Scalars["String"]>
}

export type MarkdownRemarkConnection = {
  __typename?: "MarkdownRemarkConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<MarkdownRemarkEdge>
  group: Array<MarkdownRemarkGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  __typename?: "MarkdownRemarkEdge"
  next: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous: Maybe<MarkdownRemark>
}

export enum MarkdownRemarkFieldsEnum {
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  excerpt = "excerpt",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  excerptAst = "excerptAst",
  fileAbsolutePath = "fileAbsolutePath",
  frontmatter___description = "frontmatter___description",
  frontmatter___slug = "frontmatter___slug",
  frontmatter___title = "frontmatter___title",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  gatsbyPath = "gatsbyPath",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings = "headings",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings___depth = "headings___depth",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings___id = "headings___id",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  headings___value = "headings___value",
  html = "html",
  htmlAst = "htmlAst",
  id = "id",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  rawMarkdownBody = "rawMarkdownBody",
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  tableOfContents = "tableOfContents",
  timeToRead = "timeToRead",
  wordCount___paragraphs = "wordCount___paragraphs",
  wordCount___sentences = "wordCount___sentences",
  wordCount___words = "wordCount___words",
}

export type MarkdownRemarkFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  excerpt: InputMaybe<StringQueryOperatorInput>
  excerptAst: InputMaybe<JsonQueryOperatorInput>
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>
  gatsbyPath: InputMaybe<StringQueryOperatorInput>
  headings: InputMaybe<MarkdownHeadingFilterListInput>
  html: InputMaybe<StringQueryOperatorInput>
  htmlAst: InputMaybe<JsonQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>
  tableOfContents: InputMaybe<StringQueryOperatorInput>
  timeToRead: InputMaybe<IntQueryOperatorInput>
  wordCount: InputMaybe<MarkdownWordCountFilterInput>
}

export type MarkdownRemarkFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  __typename?: "MarkdownRemarkFrontmatter"
  description: Maybe<Scalars["String"]>
  slug: Maybe<Scalars["String"]>
  title: Maybe<Scalars["String"]>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>
  slug: InputMaybe<StringQueryOperatorInput>
  title: InputMaybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  __typename?: "MarkdownRemarkGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<MarkdownRemarkEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<MarkdownRemarkGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkSortInput = {
  fields: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type MarkdownWordCount = {
  __typename?: "MarkdownWordCount"
  paragraphs: Maybe<Scalars["Int"]>
  sentences: Maybe<Scalars["Int"]>
  words: Maybe<Scalars["Int"]>
}

export type MarkdownWordCountFilterInput = {
  paragraphs: InputMaybe<IntQueryOperatorInput>
  sentences: InputMaybe<IntQueryOperatorInput>
  words: InputMaybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
  children: Array<Node>
  id: Scalars["ID"]
  internal: Internal
  parent: Maybe<Node>
}

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>
}

export type PngOptions = {
  compressionSpeed: InputMaybe<Scalars["Int"]>
  quality: InputMaybe<Scalars["Int"]>
}

export type PageInfo = {
  __typename?: "PageInfo"
  currentPage: Scalars["Int"]
  hasNextPage: Scalars["Boolean"]
  hasPreviousPage: Scalars["Boolean"]
  itemCount: Scalars["Int"]
  pageCount: Scalars["Int"]
  perPage: Maybe<Scalars["Int"]>
  totalCount: Scalars["Int"]
}

export type Potrace = {
  alphaMax: InputMaybe<Scalars["Float"]>
  background: InputMaybe<Scalars["String"]>
  blackOnWhite: InputMaybe<Scalars["Boolean"]>
  color: InputMaybe<Scalars["String"]>
  optCurve: InputMaybe<Scalars["Boolean"]>
  optTolerance: InputMaybe<Scalars["Float"]>
  threshold: InputMaybe<Scalars["Int"]>
  turdSize: InputMaybe<Scalars["Float"]>
  turnPolicy: InputMaybe<PotraceTurnPolicy>
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = "TURNPOLICY_BLACK",
  TURNPOLICY_LEFT = "TURNPOLICY_LEFT",
  TURNPOLICY_MAJORITY = "TURNPOLICY_MAJORITY",
  TURNPOLICY_MINORITY = "TURNPOLICY_MINORITY",
  TURNPOLICY_RIGHT = "TURNPOLICY_RIGHT",
  TURNPOLICY_WHITE = "TURNPOLICY_WHITE",
}

export type Query = {
  __typename?: "Query"
  allDirectory: DirectoryConnection
  allFile: FileConnection
  allImageSharp: ImageSharpConnection
  allMarkdownRemark: MarkdownRemarkConnection
  allSite: SiteConnection
  allSiteBuildMetadata: SiteBuildMetadataConnection
  allSiteFunction: SiteFunctionConnection
  allSitePage: SitePageConnection
  allSitePlugin: SitePluginConnection
  directory: Maybe<Directory>
  file: Maybe<File>
  imageSharp: Maybe<ImageSharp>
  markdownRemark: Maybe<MarkdownRemark>
  site: Maybe<Site>
  siteBuildMetadata: Maybe<SiteBuildMetadata>
  siteFunction: Maybe<SiteFunction>
  sitePage: Maybe<SitePage>
  sitePlugin: Maybe<SitePlugin>
}

export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<FileSortInput>
}

export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<ImageSharpSortInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<MarkdownRemarkSortInput>
}

export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  sort: InputMaybe<SitePluginSortInput>
}

export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  childImageSharp: InputMaybe<ImageSharpFilterInput>
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>
  children: InputMaybe<NodeFilterListInput>
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  publicURL: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type QueryImageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>
  fixed: InputMaybe<ImageSharpFixedFilterInput>
  fluid: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  original: InputMaybe<ImageSharpOriginalFilterInput>
  parent: InputMaybe<NodeFilterInput>
  resize: InputMaybe<ImageSharpResizeFilterInput>
}

export type QueryMarkdownRemarkArgs = {
  children: InputMaybe<NodeFilterListInput>
  excerpt: InputMaybe<StringQueryOperatorInput>
  excerptAst: InputMaybe<JsonQueryOperatorInput>
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>
  gatsbyPath: InputMaybe<StringQueryOperatorInput>
  headings: InputMaybe<MarkdownHeadingFilterListInput>
  html: InputMaybe<StringQueryOperatorInput>
  htmlAst: InputMaybe<JsonQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>
  tableOfContents: InputMaybe<StringQueryOperatorInput>
  timeToRead: InputMaybe<IntQueryOperatorInput>
  wordCount: InputMaybe<MarkdownWordCountFilterInput>
}

export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>
  host: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  port: InputMaybe<IntQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  functionRoute: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>
  component: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  path: InputMaybe<StringQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
}

export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  resolve: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
}

export type Site = Node & {
  __typename?: "Site"
  buildTime: Maybe<Scalars["Date"]>
  children: Array<Node>
  flags: Maybe<SiteFlags>
  graphqlTypegen: Maybe<Scalars["Boolean"]>
  host: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  internal: Internal
  jsxRuntime: Maybe<Scalars["String"]>
  parent: Maybe<Node>
  pathPrefix: Maybe<Scalars["String"]>
  polyfill: Maybe<Scalars["Boolean"]>
  port: Maybe<Scalars["Int"]>
  siteMetadata: Maybe<SiteSiteMetadata>
  trailingSlash: Maybe<Scalars["String"]>
}

export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata"
  buildTime: Maybe<Scalars["Date"]>
  children: Array<Node>
  id: Scalars["ID"]
  internal: Internal
  parent: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars["String"]>
  formatString: InputMaybe<Scalars["String"]>
  fromNow: InputMaybe<Scalars["Boolean"]>
  locale: InputMaybe<Scalars["String"]>
}

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SiteBuildMetadataEdge>
  group: Array<SiteBuildMetadataGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge"
  next: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  buildTime = "buildTime",
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  id = "id",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SiteBuildMetadataEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<SiteBuildMetadataGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: "SiteConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SiteEdge>
  group: Array<SiteGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: "SiteEdge"
  next: Maybe<Site>
  node: Site
  previous: Maybe<Site>
}

export enum SiteFieldsEnum {
  buildTime = "buildTime",
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  flags___FAST_DEV = "flags___FAST_DEV",
  flags___PARALLEL_SOURCING = "flags___PARALLEL_SOURCING",
  flags___PRESERVE_FILE_DOWNLOAD_CACHE = "flags___PRESERVE_FILE_DOWNLOAD_CACHE",
  graphqlTypegen = "graphqlTypegen",
  host = "host",
  id = "id",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  jsxRuntime = "jsxRuntime",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  pathPrefix = "pathPrefix",
  polyfill = "polyfill",
  port = "port",
  siteMetadata___authorName = "siteMetadata___authorName",
  siteMetadata___authorUrl = "siteMetadata___authorUrl",
  siteMetadata___contactFormAction = "siteMetadata___contactFormAction",
  siteMetadata___description = "siteMetadata___description",
  siteMetadata___name = "siteMetadata___name",
  siteMetadata___siteUrl = "siteMetadata___siteUrl",
  siteMetadata___title = "siteMetadata___title",
  trailingSlash = "trailingSlash",
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>
  host: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  port: InputMaybe<IntQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
}

export type SiteFlags = {
  __typename?: "SiteFlags"
  FAST_DEV: Maybe<Scalars["Boolean"]>
  PARALLEL_SOURCING: Maybe<Scalars["Boolean"]>
  PRESERVE_FILE_DOWNLOAD_CACHE: Maybe<Scalars["Boolean"]>
}

export type SiteFlagsFilterInput = {
  FAST_DEV: InputMaybe<BooleanQueryOperatorInput>
  PARALLEL_SOURCING: InputMaybe<BooleanQueryOperatorInput>
  PRESERVE_FILE_DOWNLOAD_CACHE: InputMaybe<BooleanQueryOperatorInput>
}

export type SiteFunction = Node & {
  __typename?: "SiteFunction"
  absoluteCompiledFilePath: Scalars["String"]
  children: Array<Node>
  functionRoute: Scalars["String"]
  id: Scalars["ID"]
  internal: Internal
  matchPath: Maybe<Scalars["String"]>
  originalAbsoluteFilePath: Scalars["String"]
  originalRelativeFilePath: Scalars["String"]
  parent: Maybe<Node>
  pluginName: Scalars["String"]
  relativeCompiledFilePath: Scalars["String"]
}

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SiteFunctionEdge>
  group: Array<SiteFunctionGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge"
  next: Maybe<SiteFunction>
  node: SiteFunction
  previous: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = "absoluteCompiledFilePath",
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  functionRoute = "functionRoute",
  id = "id",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  matchPath = "matchPath",
  originalAbsoluteFilePath = "originalAbsoluteFilePath",
  originalRelativeFilePath = "originalRelativeFilePath",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  pluginName = "pluginName",
  relativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  functionRoute: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SiteFunctionEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<SiteFunctionGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SiteEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<SiteGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SitePage = Node & {
  __typename?: "SitePage"
  children: Array<Node>
  component: Scalars["String"]
  componentChunkName: Scalars["String"]
  id: Scalars["ID"]
  internal: Internal
  internalComponentName: Scalars["String"]
  matchPath: Maybe<Scalars["String"]>
  pageContext: Maybe<Scalars["JSON"]>
  parent: Maybe<Node>
  path: Scalars["String"]
  pluginCreator: Maybe<SitePlugin>
}

export type SitePageConnection = {
  __typename?: "SitePageConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SitePageEdge>
  group: Array<SitePageGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  __typename?: "SitePageEdge"
  next: Maybe<SitePage>
  node: SitePage
  previous: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  component = "component",
  componentChunkName = "componentChunkName",
  id = "id",
  internalComponentName = "internalComponentName",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  matchPath = "matchPath",
  pageContext = "pageContext",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  path = "path",
  pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
  pluginCreator___children = "pluginCreator___children",
  pluginCreator___children___children = "pluginCreator___children___children",
  pluginCreator___children___children___children = "pluginCreator___children___children___children",
  pluginCreator___children___children___id = "pluginCreator___children___children___id",
  pluginCreator___children___id = "pluginCreator___children___id",
  pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
  pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
  pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
  pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
  pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
  pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
  pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
  pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
  pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
  pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
  pluginCreator___id = "pluginCreator___id",
  pluginCreator___internal___content = "pluginCreator___internal___content",
  pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
  pluginCreator___internal___description = "pluginCreator___internal___description",
  pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
  pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
  pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
  pluginCreator___internal___owner = "pluginCreator___internal___owner",
  pluginCreator___internal___type = "pluginCreator___internal___type",
  pluginCreator___name = "pluginCreator___name",
  pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
  pluginCreator___packageJson = "pluginCreator___packageJson",
  pluginCreator___parent___children = "pluginCreator___parent___children",
  pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
  pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
  pluginCreator___parent___id = "pluginCreator___parent___id",
  pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
  pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
  pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
  pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
  pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
  pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
  pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
  pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
  pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
  pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
  pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
  pluginCreator___pluginOptions = "pluginCreator___pluginOptions",
  pluginCreator___resolve = "pluginCreator___resolve",
  pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
  pluginCreator___version = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  component: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  path: InputMaybe<StringQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
}

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SitePageEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<SitePageGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: "SitePlugin"
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>
  children: Array<Node>
  id: Scalars["ID"]
  internal: Internal
  name: Maybe<Scalars["String"]>
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>
  packageJson: Maybe<Scalars["JSON"]>
  parent: Maybe<Node>
  pluginFilepath: Maybe<Scalars["String"]>
  pluginOptions: Maybe<Scalars["JSON"]>
  resolve: Maybe<Scalars["String"]>
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>
  version: Maybe<Scalars["String"]>
}

export type SitePluginConnection = {
  __typename?: "SitePluginConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SitePluginEdge>
  group: Array<SitePluginGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: "SitePluginEdge"
  next: Maybe<SitePlugin>
  node: SitePlugin
  previous: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  browserAPIs = "browserAPIs",
  children = "children",
  children___children = "children___children",
  children___children___children = "children___children___children",
  children___children___children___children = "children___children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___id = "children___children___id",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___children___parent___children = "children___children___parent___children",
  children___children___parent___id = "children___children___parent___id",
  children___id = "children___id",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  children___parent___children = "children___parent___children",
  children___parent___children___children = "children___parent___children___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___id = "children___parent___id",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___parent___id = "children___parent___parent___id",
  id = "id",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  name = "name",
  nodeAPIs = "nodeAPIs",
  packageJson = "packageJson",
  parent___children = "parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___children = "parent___children___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___id = "parent___children___id",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___parent___id = "parent___children___parent___id",
  parent___id = "parent___id",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___parent___id = "parent___parent___parent___id",
  pluginFilepath = "pluginFilepath",
  pluginOptions = "pluginOptions",
  resolve = "resolve",
  ssrAPIs = "ssrAPIs",
  version = "version",
}

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  resolve: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection"
  distinct: Array<Scalars["String"]>
  edges: Array<SitePluginEdge>
  field: Scalars["String"]
  fieldValue: Maybe<Scalars["String"]>
  group: Array<SitePluginGroupConnection>
  max: Maybe<Scalars["Float"]>
  min: Maybe<Scalars["Float"]>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum: Maybe<Scalars["Float"]>
  totalCount: Scalars["Int"]
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata"
  authorName: Maybe<Scalars["String"]>
  authorUrl: Maybe<Scalars["String"]>
  contactFormAction: Maybe<Scalars["String"]>
  description: Maybe<Scalars["String"]>
  name: Maybe<Scalars["String"]>
  siteUrl: Maybe<Scalars["String"]>
  title: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataFilterInput = {
  authorName: InputMaybe<StringQueryOperatorInput>
  authorUrl: InputMaybe<StringQueryOperatorInput>
  contactFormAction: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  siteUrl: InputMaybe<StringQueryOperatorInput>
  title: InputMaybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars["String"]>
  glob: InputMaybe<Scalars["String"]>
  in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  ne: InputMaybe<Scalars["String"]>
  nin: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  regex: InputMaybe<Scalars["String"]>
}

export type TransformOptions = {
  cropFocus: InputMaybe<ImageCropFocus>
  duotone: InputMaybe<DuotoneGradient>
  fit: InputMaybe<ImageFit>
  grayscale: InputMaybe<Scalars["Boolean"]>
  rotate: InputMaybe<Scalars["Int"]>
  trim: InputMaybe<Scalars["Float"]>
}

export type WebPOptions = {
  quality: InputMaybe<Scalars["Int"]>
}

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never }>

export type SiteMetadataQuery = {
  __typename?: "Query"
  site: {
    __typename?: "Site"
    siteMetadata: {
      __typename?: "SiteSiteMetadata"
      title: string
      name: string
      description: string
      siteUrl: string
      contactFormAction: string
      authorUrl: string
      authorName: string
    }
  }
}

export type MarkdownPageQueryVariables = Exact<{
  id: Scalars["String"]
}>

export type MarkdownPageQuery = {
  __typename?: "Query"
  markdownRemark: {
    __typename?: "MarkdownRemark"
    html: string
    frontmatter: {
      __typename?: "MarkdownRemarkFrontmatter"
      title: string
      description: string
    }
  }
}
