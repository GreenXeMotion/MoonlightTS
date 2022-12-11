import { EnterType, PlayerEnterSceneNotify, PropValue, Vector } from "../data/proto/game";
import { Session } from "../kcp/session";
import { getRandomInt } from "../utils/Utils";
import { GameConstants } from "./Constants";
import { DataProperties } from "./managers/constants/DataProperties";

export class Player {
    readonly session: Session
    private playerProp: { [type: number]: number } = {}
    public position: Vector

    constructor(session: Session){
        this.session = session
        this.initNewProp()
        this.position = GameConstants.START_POSITION
    }

    private initNewProp() {
        this.playerProp[DataProperties.PROP_PLAYER_RESIN] = 2000
        this.playerProp[DataProperties.PROP_IS_SPRING_AUTO_USE] = 1
        this.playerProp[DataProperties.PROP_MAX_SPRING_VOLUME] = 8000000
        this.playerProp[DataProperties.PROP_CUR_SPRING_VOLUME] = 8000000
        this.playerProp[DataProperties.PROP_SPRING_AUTO_USE_PERCENT] = 0.5
        this.playerProp[DataProperties.PROP_MAX_STAMINA] = 24000
    this.playerProp[DataProperties.PROP_CUR_PERSIST_STAMINA] = 24000
        this.playerProp[DataProperties.PROP_IS_FLYABLE] = 1
        this.playerProp[DataProperties.PROP_IS_TRANSFERABLE] = 1
        this.playerProp[DataProperties.PROP_IS_MP_MODE_AVAILABLE] = 1
        this.playerProp[DataProperties.PROP_PLAYER_MP_SETTING_TYPE] = 2
        this.playerProp[DataProperties.PROP_PLAYER_WORLD_LEVEL] = 100
        this.playerProp[DataProperties.PROP_PLAYER_LEVEL] = 100
        this.playerProp[DataProperties.PROP_PLAYER_EXP] = 999999
        this.playerProp[DataProperties.PROP_PLAYER_SCOIN] = 999999999
    }

    getPlayerProp(){
        const propMap: { [type: number]: PropValue } = {}
        for (const type in this.playerProp){
            propMap[Number(type)] = PropValue.fromPartial({
                type: Number(type),
                val: this.playerProp[type],
                ival: this.playerProp[type]
            })
        }
        return propMap;
    }

    public teleport(
        sceneId: number,
        position: Vector,
        type = EnterType.ENTER_TYPE_SELF,
        enterReason = 3
    ): void
    {
        const sceneIds: number[] = []
        for(let i=0;i<3000;i++){
            sceneIds.push(i)
        }

        const teleport = PlayerEnterSceneNotify.fromPartial({
            sceneId: sceneId,
            pos: position,
            sceneBeginTime: Date.now(),
            type: type,
            enterReason: enterReason,
            targetUid: this.session.uid,
            enterSceneToken: getRandomInt(1000,9999),
            Unk3300LIDGFMDDOOM: 1,
            worldLevel: 8,
            sceneTransaction: "3-" + this.session.uid + "-" + Date.now()/1000 + "-67458",
        })

        if(enterReason === 1){
            teleport.Unk3300LFFBNEBMAAG = true;
        }else{
            this.position = position
            teleport.Unk3300LLHABHMLNAH = this.session.getWorld().getSceneId()
            this.session.getWorld().setSceneId(sceneId)
        }

        teleport.sceneTagIdList = sceneIds

        this.session.send(PlayerEnterSceneNotify,teleport)
    }


}