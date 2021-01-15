import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      insured: {},
      response: {},
      request: {
        "insurance_policy_id": 21246, // hardcode
        "recorded_type": "CARE_VOICE_APP", // hardcode
        "person_insured": {
        "name": "Gracie Group",
        "country_code": "86", // hardcode
        "phone": "13920201125",
        "birthday": "2000-01-01",
        "email": "",
        "gender": "未公开", // hardcode
        "id_type": "", // hardcode
        "id_number": "B2****101" // hardcode
        },
        "policy_holder": {
        "name": "Group___creating", // hardcode
        "phone": "13133131", // hardcode
        "address": "Shanghai", // hardcode
        "id_number": "G0000004" // hardcode
        },
        "claim_type": "outpatient", // hardcode
        "currency": "USD", // hardcode
        "total_amount": "1221", // hardcode
        "provider": {
        "name": "Hospital name"
        // hardcode
        },
        "relate_claims": [{
        // Submit to other insurance
        "created": "2021-01-07", // hardcode
        "claim_relationship": "prior", // hardcode
        "claim_identifier": "", // hardcode
        "insurance_name": "" // hardcode
        }],
        "payee": {
        "payee_name": "1", // hardcode
        "bank_name": "1", // hardcode
        "bank_branch": "1", // hardcode
        "bank_account": "1", // hardcode
        "claim_currency": "USD" // hardcode
        },
        "attachments": [{
        "type": "FB",
        "resource_ref": "axa_claim/52ba76c0-32f8-0139-1a54-1e3056b8d114/Inpatient.jpg"
        }],
        "signature": "axa_claim/2e80b600-32f9-0139-1a54-1e3056b8d114/signature.png", // hardcode
        "notice": "test" // hardcode
        }
    },
    mutations: {
      insured (state, payload) {
        state.insured = payload;
      }
    },
    getters: {
        insured: state => state.insured,
        triggerAPI: state => state.response
    },
    actions: {
        triggerAPI(state) {
            fetch("https://my-json-server.typicode.com/ray-97/demo/db/", {
                method: "GET",
                // headers: {"Private-Token": "xxxxxx"}
                // body: state.request
                }).then(res => {
                    console.log(res.status);
                    state.response = res.text();
                    console.log(state.response);
                }).catch(err => {
                    console.log(err)
                })
            }
    }
  });