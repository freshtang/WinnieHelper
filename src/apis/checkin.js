const addCheckin = async (data) => {
  console.log(data)
  return await wx.cloud.callFunction({ // eslint-disable-line
    name: 'addCheckin',
    data: data
  })
}

const queryCheckin = async (data) => {
  return await wx.cloud.callFunction({ // eslint-disable-line
    name: 'queryCheckin',
    data: data
  })
}

export default {
  addCheckin,
  queryCheckin}
