#!/usr/bin/env node
import chalk from 'chalk';
import { spawn } from 'child_process';
import readline from 'readline';

var isStopped = false
var start = process.hrtime();
var delay = 100
var index = 0

var runningMan = new Array()
runningMan[0] = `



                                          .rLjJuLr.
                                        :28NX1S15U57
                                       LkN0EPNPP27:Sr
                                      7XrXGEZ00kSjJUU
                                      NGqGZMMOqP55107
                                      GM8ZMMBM8qNqMk
                                      :BBBBBEMBBBBF
                                        kMBMSBBBq,
                                        :vrLLr
                                      :uU77:ri
                                  ,rYEBBMZSr Yi
                                 LBGqBB80FkUvUL
                                 BB2ijU2UFUuYF:
                                 0ZUYv25NkFUUL
                                :FLvLUU5U5ujJU7Ljk27
                               .BBMXF21uuJL.iMBBBBBB.
                                NBBBZNkPkP17;77LPMS,
                                 iBBB1PqOBBMGUr.
                                   UBBMBM2OBBBO7
                                   ,GOBBE 7POMP
                                   rGBBG7u10GU
                                  .UXJ7:L8BO;
                                 ,FBjrYuLL7
                               :UGBBBNBMN7:
                             JBBBBBBBBBBBBPY7.
      ..::iii:i:i:i:::::::::i8BBBMMGOZNuMBBNP,
       . ........... ... . .
`
runningMan[1] = `



                                           ,::,.
                                       .71XSS5k11r
                                      LGG0XkFk12;YY
                                     UL2GN0P0Pk27rXi
                                    L8jP0M8MNq5522ki
                                    qOGq8OBO8XPFSNk
                                    UB8OOBBB8GN8MG.
                                     EBBBBZqBBBBJ
                                      :kBBBBBNi
                                        .jU7
                                 ,7Liiir7rir7.
                                2BBBBBBBBq5:,u:
                               UBMU.iBZM0NSU 7Y
                             :U212  ::L12U5UY27  .JXS7
                           .FBNUvi :i7q0XN1UYri:UBBBBB.
                           iBBBBZ .XSNNkPFUuu::qBBBBM:
                            :8Ej  rGSqXqkSU1SNkY.
                                  UOGZOXX5PqZEM,
                                  iBBB80qGZ8kk:
                                   iBBBBO1NEq7
                                    :BO2irYUL.
                                    .5Xr2GqYv7i
                                 ..75GBBBBBBBBN1Y:
                            JSFj1ZBBBBBBr .YBBBBB;
                           .BBBBBBBBBBj       ,i.
    ..,:::i:i:::::i:i::::::.rEM8MMEUX2   
     ................... .
`
runningMan[2] = `



                                         .iYUF11jL,
                                       .JEOqPFk15YUr
                                      :XkG0EqEPP1riP:
                                     ,ZrUZOZGE0kSUUSr
                                     XG0EGGBMGqP5FSE.
                                     0M0ZGMBB8ENqEBr
                                     7BB8BBOZBOBBB;
                                      rBBBBOBBBBu
                                   ,,   rOG8EY.
                                .PBBBBSr;i;ir
                              :UZBBPSBBBMG2rr2i    ,7L:
                           iJUFLkv.   EPMZNUYiU,  iOBBBi
                          YBBMUXi    rLU212kY7u: rBBBBN
                          iBBBBr    77;NNSPUUJY7SBBBY.
                            ,:     ,u:qZX05UYJrrkY
                                   5YYZXPX5uujFv;
                                  ,MNMZEPPSPNMM8F.
                                   MBMBEZEMNBBBGF.
                                   :BBBBMBi  uBMF:
                                    NMBXBB   .0PU7rirri
                                   ,F0FSB,   j5XukMBBBB;
                                  iU5X0B7   :BBBBBBBBEr
                           iiii7uZMMMBBi     .i:
                          BBMq0NOBBBO7   
                          jBBBBZ21U      
      ..,::::::::::::::::. i0MM8PUi      
       . ...............
`
runningMan[3] = `



                                              .::i:,
                                           :uP0FS1S12r
                                         .j00EqPSPF5;LY
                                        .PLrENGEGqX2jYk:
                                        jOk0qE8MZEkkUSX.
                                        XOENG8BBM00X0OY
                                        .MOMMBMXOBMBBL
                                  iv15J. iFNBBMBBBBG.
                           ,LYirj0BBBBBBF7;rrLv1r:   .
                          rBBO2YZ8Ui .2MBMEJriv    :OB8v
                          :BBBBMj.     FN8qFu7:v  .8BBB2
                            7u7.      LUUYuU5rrL ,MBBqr
                                     LLS1F15uuLY2ZEJ
                                    77rPqXP2UYuMBZ.
                                   .P1NZq0k52X7,,
                                   78NG0q52UXr
                                   r8ZEGP5L7r
                                   iOqOMM0kL:::
                                   vPMMBBBBON5jL.     iqPL
                                 :kEBBBE:JBBBBMkY:   :XMMq.
                               :UOBBBBL    :ZBBBBX7::UPMZr
                          ..iuqMBBBBS         7NBBBMkYUFj
                        FMk1EBBB82:              vBBBBBX
                        OBB2YJi                    :OBq.
                         ZBM1Y:          
      ..::::::::::i::::,.:8MGkY ...............
      ..................         . . . . . .
`
runningMan[4] = `





                                          .i7YLv;:
                                        7XZkk12212U:
                                       UUXN0kXSFUriS,
                                      j0LSGGGEEkFYY2Y
                                      qM0GEMMMEq5S10r
                                      7BOGMMBMMEN0MF
                                  ,i,  jEMBBMZBBBBL
                            ...:qBBBBB2rr7uXPqB07
                          UB82LNBBUrXBBO5Ji,:L     .,,
                         ,BBBGqPr    7MMBEk:,J    jMBZU
                          2BBBj.     YjS2127iU   1BBBBJ
                                    Yiu5UUU7vY.,8BBkY.
                                   iU7qNSXujLjZBqJ.
                                   FP0GN0kFu2UBY
                                  iZqGNN51J1j
                                  1MZGONSJL7,
                                  iBOMMBEFY;:.
                                   5BOMMBBMq1Y:
                                   v0BBBBBBBBEJ7
                                 .72MBBB  YBBBMF7.
                        .UUY7LjU5EZOBBB.    JBBBGXi
                        LBBNFXOBBBBB0i        :BBBPY7rJJU1Nu.
                         JBBMkjPr.              7BBBMMBBBBB8
:i::::i:::::i:i:::::i:::. LMBP2r      .........  iMBBEOkur:
,:,:,,,,.,..............               .
`
runningMan[5] = `





                                          :;r7ri.
                                       .jqN55U5U5L.
                                      :55ZXXSSUui7U.
                                      8YjZG00PX27rF7
                                     iB8NZZMZEkFUUFY
                                      MOGGMBMZNSkqE.
                                      ,MMBBBBBMBBO.
                                 .:.   .22GM8MBG7
                               iN8MBBNuL7riir7
                             :UZBNJkBBBBMXL :i
                           ,UXuJJ.  ;PqGkP17rU    .::
                          YBBG5j:   7.1U2UULjY  .1BBBq.
                          7BBBB0   u:vPS15JYLL:uMBBBBU
                            7L:   :PSNEqq5UYY5BBB0Ji.
                                  YZNZPq12Yv7r
                                  NZGGOqk2Ur:
                                  qBMBMZP8E0Uur.
                                  ,BBB85ZBBBB81L.
                                    ZMOBBq.0MMNk:
                           :7;:     L5EBBr .OMMX:
                          XBOXUuYYJkN8MBB   ZBGk
                          :BBBGXXNBBBBBU   ,E0F7
                            iBBBNkPr       5k1YjUS5F7.
    ..,,::i:i::::::::::::,:. :8Mq2i     . LBBMEGBMGqE;
     ..................... .
`
runningMan[6] = `




                                          .:r7Lr:.
                                        :qE0FS5S1SL.
                                       L1P8qNXP5U:LU.
                                      rMLXGOGGqX1L7Xi
                                      2M8ZZMBGEqk15Pi
                                      iBMMOBBB8EqEMX
                                       LBBBBMZBBBBF
                                         5BBMBBB2.
                                        .i77L.
                                :jYLvjk8NU777.
                               vB8BBBBBBBq5r:U
                              rM27.:G0PkU52L7F.
                             :N57, .JY1U522Ljj
                            YMONLi7SXNqEqXUuJv .;vi.
                           .BBBBBMBM8NZEN52YU0BMBBBJ
                            rBMU,7BM0G0q1Uvr78BBBBZ.
                                  PMOBB0P557:   .
                                  :BBBBBMBMZj:
                                   ,BBBMBBBM8jY.
                                    rNZBB8UZZNX:
                           ,ri:..,i71ZBBB1JEBOU
                          7BBE1SPNGBBBBBiikMOU
                          .BBBGXPOBMk;.  JX5j,
                            uBBMYM.    Y8ZS5UFqGP7
     .,:::ii;iiii:::::::i::..UBEFk,   :BBBBOBBMGOr
     .....................
`
runningMan[7] = `


                                           .iir;i,
                                        .LX0SX5F15ui
                                       iP0ZqPkPS5L:Ur
                                      7XiP0G0GqPFU7U2
                                      MqP0EGMGEXS25SU
                                     .BO0EEBBB00XN0G,
                                      JBBMMBE0BMBBO,
                                       rOBBBBBBB87
                                         iG0v;:
                                       :irri
                                     iXNPJvL1:
                                 .v1ZB88XFur:1
                                ,BBqMMq21U1ii1.
                                LB57vuJFkXUuU2
                                :PUr7LU2S25uSi
                                ,UUUYuJUJUuSU
                                SBB8P21uJLLYu;:
                                :BBMNMNkJvrEBBk.
                                  jBBBBN577OBG:
                                    5OZOXu;
                                    iFX0EUJ.
                                 ,7kZGFNZqU7
                           ;jY2NBBBBBBX5MEP7
                          rBBXjBBBBO7  PMZF.
                           OBNLMv     .8OFY
                           7BBUM:     7BPU7jjFXNj.
    ..,,::::i:::::i::::::,.7M8kPi ....NBBG88BMM8q.
     . ...................         .
`
runningMan[8] = `
                                           .ii;:,
                                        .YP0XXSk52:
                                       7OZ8qNPP1J:Ui
                                      7U7GZZNEXSu7J2
                                     .M1k0O8MNqF1U1U
                                     iMG0Z8BMGXPFkE7
                                     .BMGGBMB8GqGBF
                                      rBBBBOkBBBBL
                                        YMBBBBB7
                                         iY:
                                      Y5U7rr.
                                     5NZNk7v1i
                                    Y00P0S1:;Y
                                  .uqXFF2F5YY2
                                  PZOkS2k2LvPL
                                 .0ZqP55jY:ru
                                 iG5qPqSULv7:
                                 7BEqZ0ZEGFF:
                                  NZZEBMBBBF
                                  iMZBBB8BJ
                                  :ZOEkYYUi
                                  .GEXY7YP.
                                  .P8Puv1:
                              :7Yk5SG81Y 
                            .NBBBBBXMZkr 
                            .BBBBB.YBMF; 
                             SBBBX :G2vi  ...
                             jBBBB jBEUk0GZMME.
      ..,,:::::::::::::::::,.rMMBU YBBMOBBBBBk.
       ................. .
`
runningMan[9] = `


                                        :rjUUJv:
                                      iNMGkP5F25j,
                                     r2kOEENq51:71.
                                    :MYkZM88PX2uYXi
                                    YM8E8OB8Ekk2Fq:
                                    :BMOOBBBGZP0M2
                                     vBBBBMZBBBBU
                                      .SBBBBBB1.
                                         .,
                                      rYv7r:
                                    ,USEkj7JU
                                 vZOj.JBMqvJF,
                                GBBG7j8NN2JY5
                               .OBFiiEkX1U7L7
                               r1L7.2Z0XSJ7r7
                              :MS5J2GEqPX8G0k2FNkJ
                              7BBE0ZM0XJUMBBMkBBBB,
                               rU58OO81v1BBBBBBBMi
                                  ;MMGkrZBBBBF
                                   8MMF77BMMqj
                                   2M0XviY8BB:
                                   U8E1Lv0BS
                                   SMN1JM8;
                                  FBB8S7 
                                 iMM0Uu: 
                               ij5uUL7vUuL.
.   ....,,:::::::::::::::,:,:.UBBMMMMG00MML
 . ....:,:,:.............. .
`
runningMan[10] = `




                                      .:77Yvr,
                                    .uN055U2u5Ui
                                   .2UEXP5XUUi:Ui
                                   EUuNGN0kFUYr2U
                                  .M8N0EMZqFFUU1U
                                   XBOZMBBGNkPqZ,
                                    0BBBB2BBBBG.
                                     :uGMkkqU:
                                       .7rr
                                 YY7::JU77rY:
                               iBBBBPi7NqF;:5.
                              7BBB,7i:X800urU:
                            .2BBB  r.1q1XS17Y.    i77:
                           iMBBBB;r:7GXk15UY7vLUE8ZB8G:
                           :BBBBOj7,PkPSF1qE8GBBBBBBBq.
                             ::. :k0PX52juFBBBBi :7L:
                                 LB8Ek5L7r0BBBB
                                 .GBM8FY;rkBMX
                                   UBOG27iYMU
                                    uMEqY77.
                                    :EO0FL;
                                   .7NGOFUJLi
                              ..,rUSPXZSkBBMZu
                            2OqqXNNZNP5  :MBBS
    ..:,:::,:,:,:,:,:,:,:,.rBBBBBBMNNSY  
   ..:::::::,,............
`
runningMan[11] = `




                                        ,:rr7i:
                                      iXkX25u2U1i
                                     L5qq5k2Fj7:u7
                                    jF70qNXqF1LrLF.
                                    000XE8GPX12jUF.
                                    FBEEGBM8XPFXEr
                                     ZBBBBkNBMBM7
                                      i8BBSq8N7
                                  ,i.   ,YY7r
                               :uBBBBG7:r7i;7r
                            LuFS8BBYENUUXF2v;vr     .ivv;
                          ,BBBZB8:   YvkkN0Xr7i   :kPMBM87
                          ,BBBB7    U.JS1U552ri,YEBBBBBBE
                            ..     7viqq55J211PBBOU:,ii,
                                   Y,2NkqFUYEBBU.
                                  rJYNFkU2UJjFY:
                                  kZZPXuYLkMMEXjr
                                  JBM8XU77:;PBMGj
                                   YB8ZUvr   GMZ1
                                    vOqkuu.  5MP7,.;7Yr.
                                    i08NqS:  v82JUZMBBB:
                            ..   .:rU8MBML   XBBBBBBqv
                          ,Nq1UvJSNSNBBNi     ii:.
                          :BBBMON8ZNS7.  
:::::::::::,:,,.,.:,:,,,,. :EBBBBOqUi   .
:r:i::::,,.............. .
`
runningMan[12] = `


                                             ,i;ri:
                                          ,2qqkS5F5Fr
                                         LEEZPqkq1UiLY
                                        jUrZ0GNZXkULvP,
                                       .Mk0qZ8MNNSS25X,
                                       :B8NZGBBMNNkq8J
                                        PBMOBBZMMOBBU
                                         UBBBBBBBB0:
                                           ,7YUvi
                                 .iPBBB;   ,          ;L7:
                            7EO1OBBBBBBM1UXuuYL.    ,FBBB8i
                           rBBB80OU,  7uUqqZ01Lu   YBBBBBN
                            8BBX:     YUFU22kP1;::GBBBXv,
                                     v7YF5U2Lj5PNBBP.
                                    ,SrFGqqSULPBBMi
                                    LYXMZ8NX1kXr
                                   .YiNPNkPPOX.
                                   vkNqPjJJSU
                                   7BMG5YrLLi
                                   L8O0FYjkZUu7:     :1Gk:
                                  .u8Z0SuqBBBB8XU:   UOM8:
                                .75NGBM2  .LOBBBBELir2GM2
                              rUNEMBBNi       7BBBBMq1q0i
                        iJLvJMBBBBBk:            ;NBBBBU
                       LBBZUFBBM5:                 .uUi
                        ZBBkv7:          
     ..,:,:,:,:,:,:,,.. ,MBBEU: ..........,...
     ....,.......... . .
`
runningMan[13] = `





                                          :r7YLYr:
                                        Lk0SF25U2UJ.
                                      ,2uNXNXqSSui;F
                                     .GvLNNNEqq55JjF:
                                     U0Nq0NOZZXk211k
                                     UOqE0MMBZEPqZO:
                                      qOGBBBBBMBBG,
                                   :Lv0SUUk11YkFi    .::,
                               .:2BBBB0rr7ii:i:     v8BB0v
                           ,1qUFBBBU::uLu2FUj77    JBBBBBi
                           BBBEqBY    YLFSSPPF7: iMBBBSr
                           rBBMr     LirXUUYju15SkO5,
                                    :7,kkXF5Y7PBBM,
                                   .S7XENNP22UqL:
                                   YuNEZ00SSkP.
                                  .j2qNXk5XN5
                                  7E0ES2YuU1i
                                 .PZO0PSEOG1Y7,
                                iUSOEON:;BBBMqY:
                             .ruN0OMB2.   iGBB8uv
                          .;u0ZMBBM2.       rBBBq7.
                     .LjJJNGMMBBPi            1BBZJi:,::;i,
                     kBBG0k5U2r                ,MBBBOBBBBBG.
    ..,,:::::::::::,.:BBBBBZSY. ..............  :2k2555UUj:
   ..,...,........ .
`
runningMan[14] = `





                                           ...
                                       :jUF222UL:
                                     ,U0qXU521Y7Yr
                                    :Fr1ZqqXP1Ui7F,
                                    XNUNN800kSUUYk:
                                   .M0EPGMM0NkF2qF
                                    XBEMMBBBG8EME,
                                     58X88MPXPMU.
                                  .: ,L77rii:v.
                                .OBBBYYYuYYrir      L2SY:
                               vBBBii77PPE0k77    rMBBBBS
                            :iEBBG  ;:uXS2kSFL:.LMBBBBBP.
                           ZBBBBM  ,7rNXSFLYSZ0MBB2i.
                          .BBBB0   UL1NFX2J78BBN:
                            ,:    vqXZqN55JJ1:
                                 .80G8M0P1UL7
                                 .88GM00P0XkUJi
                                  FGMEkUXMBBBNUr
                                  LO0qUu  .XMMPF.
                                 .Uq0kNr   rMMGU
                               :75kO8OL    vBBq:
                        i7vr7v10MOBB0:     7X1u.
                       JBBBMOGEO0Ou.      JOkS2SSXX5,
  . ,,:::::::::.,,,.,..:BBBBBO85ui   ....,PZNUPkk5X5i
 . ..,........ . . . .
`
runningMan[15] = `




                                         .:::.
                                      ,UXkFS1F2j.
                                     vGZNFk55u7rF,
                                    LUv8EEP0FF7iU2
                                   .Mq0EM88qP11U12
                                   .MM08MB8GPP5S07
                                    SBBMBBBMMGMB2
                                     UMMMB80qB8;
                                      iYLr7iv.
                                     :UULL7r7,
                                 ,UjJYFq0Pk:7L
                                rBBB7.k0qZPuL7    .jSS7.
                                kBBJiYGkqSqUvi .78BMBBBr
                               iGX77jG00PF2P5EBBBBBBBBU
                              .5u7LUNEGNP5NMBGX7i..,:
                             .BBF5F0ZMZ0kFUNr
                              MBBMM8BMGXP1ur:
                                 rMBBMPS5NZEUj:
                                  .GMGqLYMBBBEu
                                   2EOXjrLNGZ0L
                                  :L1XPS,.5Xqk,
                          ,i::,;YqZOMB0: YBBNi
                         PBMP11uZBBBBL  :Y12L:,,.
                         rBBBBB01kPi   GBMqGEOOBBr
    ...,:::,,,,.,.,.,.,..  rGBBO01v   ,0BZEkXqNkU.
   . .,:.,.. . ... . .
`
runningMan[16] = `



                                        .ir7ri.
                                      iF8qX1S1kU:
                                     jP8EqXq557i1r
                                    YkLEMZG0P5JiUk.
                                    XMEZ8B88XP15UN
                                    kBMGBBBO8NNXMv
                                    .BBBBBBBMBBBj
                                      5q8GZSUSS,
                                      iuv7rvrv
                                     7S21UU .U.
                                    7FJGqXU .X.
                                  ,ULrZEEXUvUU
                                 ,MqrkGGNPUYr7  .ii,
                                  U2qG800XPF52ZXMBBN:
                                  5ZGM8ZPNMBBBBBBBBB.
                                 :BGMM8XUkBk. i1MqL
                                  BBMBEF7PB
                                  ,MBMO1LvX
                                   :MMZXLLui
                                    YUFuYYX;
                                .:7XqZ2YL1k.
                          ,USU1NMBBBBBB8ZSU
                          BBBN58BBBkr  MBGU
                          7BBNY::      5MPY.
                           iBBBUv     7BZXFEEG0X;
.   ..:::::::,:,:,:::,:,:.. qBBMk:....28ZSXNNFS2v
 . ....,.............. . .
`



function runInfo() {
    return `${chalk.yellow("Run Boy Run!")}
Elapsed time: ${elapsedTime()}
Press ${chalk.bgBlue("any")} key to stop.`
}

async function spawnCaffeinate() {

    const child = spawn('caffeinate', ['-s', '-d']);
    while (!isStopped) {
        changecontent()
        await sleep(delay)
    }

    child.kill()
    console.clear()
    console.log(`${chalk.red("Registered keystroke. Stopping application.")}
Application ran for: ${chalk.bgRed(elapsedTime())}`)
    console.log()
    console.log("Closing application in 3 seconds.")

    await sleep(3000)

    process.exit()
}

function changecontent() {
    if (index >= runningMan.length)
        index = 0

    console.clear()
    console.log(runningMan[index])
    console.log(runInfo())
    index++
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function elapsedTime() {
    return secondsToHms(process.hrtime(start)[0]);
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    isStopped = true
});
console.clear();
await spawnCaffeinate();
