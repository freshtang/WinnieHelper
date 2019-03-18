const addTarget = async (data) => {
  return await wx.cloud.callFunction({  // eslint-disable-line
    name: 'addTarget',
    data: data
  })
}

const queryTargets = async (data) => {
  return await wx.cloud.callFunction({ // eslint-disable-line
    name: 'queryTargets',
    data: data
  })
}

export default {
  addTarget,
  queryTargets
}
