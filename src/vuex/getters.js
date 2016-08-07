export const contentList = ({ contentList }) => contentList.dataList
export const contentListLoader = ({ contentList }) => contentList.isFetching
export const projectPageIndex = ({ contentList }) => contentList.pageIndex

export const projectColumnList = ({ projectColumnList }) => projectColumnList.dataList
export const projectTripList = ({ projectTripList }) => projectTripList.dataList
export const projectInteractList = ({ projectInteractList }) => projectInteractList.dataList
export const homeLoader = ({ projectInteractList, projectTripList }) => !projectInteractList.isFetching && !projectTripList.isFetching

export const commentList = ({ commentList }) => commentList.dataList
export const commentListLoader = ({ commentList }) => commentList.isFetching

export const isLike = ({ like }) => like.isLike
