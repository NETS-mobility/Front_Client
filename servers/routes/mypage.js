const express = require('express');
const router = express.Router();

const pool = require('../modules/mysql');
const pool2 = require('../modules/mysql2');


/* ===== 서비스 목록 조회 =====
 *
 * 현재 진행중이거나 완료된 서비스 목록을 반환합니다. (픽업날짜 기준 오름차순 정렬된 상태)
 *
 * === http-method ===
 * post
 *
 * === client-input ===
 * jwtToken: 사용자 정보 jwt토큰 (문자열)
 *
 * === server-return ===
 * 
 *
*/
router.post('/serviceList', async function (req, res, next) {
    const token = req.body.jwtToken;
    const listType = req.body.listType;

    const token_res = await jwt.verify(token);
    const user_id = token_res.id; // 이용자 id

    let err_custom = false;
    let err_msg = "";

    const connection = await pool2.getConnection(async conn => conn);
    try {
        if(!(listType >= 0 && listType <= 1))
        {
            err_custom = true;
            err_msg = "잘못된 인자 전달";
        }

        let param = [user_id];
        let sql1 = "select S.`service_kind` as `service_type`, R.`reservation_id` as `service_id`, `expect_pickup_time` as `pickup_time`, `pickup_base_address` as `pickup_address`, " + 
            "`hospital_base_address` as `hos_name`, `hope_hospital_arrival_time` as `hos_arrival_time`, `fixed_medical_time` as `hos_care_time`, `hope_hospital_departure_time` as `hos_depart_time`, " + 
            "NM.`netsmanager_name` as `netsmanager`, C.`car_number` as `car_number`, `gowithmanager_name` as `gowithumanager`, " + 
            "`reservation_state_id` as `service_state`, P.`is_need_extra_payment` as `needExtraPay` " + 
            "from `reservation` as R, `service_info` as S, `netsmanager` as NM, `car` as C, `payment` as P " + 
            "where `user_id`=? and R.`service_kind_id`=S.`service_kind_id` and R.`netsmanager_id`=NM.`netsmanager_id` " + 
            "and R.`car_id`=C.`car_id` and R.`reservation_id`=P.`reservation_id` ";

        // 서비스 진행상태 분기점
        if(listType == 0)
        {
            sql1 += "and `reservation_state_id` in (?,?) ";
            param.push(service_state.ready, service_state.inProgress);
        }
        else 
        {
            sql1 += "and `reservation_state_id`=? ";
            param.push(service_state.complete);
        }
        
        sql1 += "order by `expect_pickup_time`;";
        const result1 = await connection.query(sql1, param);
        const data1 = result1[0];

        res.send(data1);
    }
    catch (err) {
        if(!err_custom)
        {
            err_msg = "서버 오류";
            console.error("err : " + err);
            throw err;
        }
        else err_msg = err.message;
        res.status(500).send({ err : err_msg });
    }
    finally {
        connection.release();
    }
});


module.exports = router;
