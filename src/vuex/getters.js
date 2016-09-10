export const projectList = ({ projectList }) => projectList.dataList
export const loading = ({ projectList }) => projectList.isFetching
export const projectPageIndex = ({ projectList }) => projectList.pageIndex

export const projectColumnList = ({ projectColumnList }) => projectColumnList.dataList
export const projectTripList = ({ projectTripList }) => projectTripList.dataList
export const projectInteractList = ({ projectInteractList }) => projectInteractList.dataList
export const homeLoader = ({ projectInteractList, projectTripList }) => !projectInteractList.isFetching && !projectTripList.isFetching

export const commentList = ({ commentList }) => commentList.dataList
export const commentListLoader = ({ commentList }) => commentList.isFetching

export const isLike = ({ like }) => like.isLike

export const userInfo = ({ user }) => user.userInfo

export const projectDetail = ({ projectDetail }) => projectDetail.data
export const projectSlide = ({ projectDetail }) => projectDetail.slide

export const orderList = ({ order }) => order.list
export const orderLoading = ({ order }) => order.isFetching
