import * as types from './mutation_type'
export default{
    sendA({commit},aData){
        commit(types.SEND_A,aData);
    },
    newAuthor({commit},bData){
        commit(types.NEWAUTHOR,bData);
    }
}
