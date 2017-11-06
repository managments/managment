import * as types from './mutation_type'
export default{
    [types.SEND_A](state,aData){
        state.amsg=aData;
    },
    [types.NEWAUTHOR](state,msg){
      state.author=msg;
    }
}
