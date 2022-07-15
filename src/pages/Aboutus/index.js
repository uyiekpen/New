import React from "react";

import { Column, Row, Image, Text, Button, Stack, Line } from "components";

const AboutusPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] outline outline-[8px] outline-red_A700 lg:pb-[317px] xl:pb-[363px] 2xl:pb-[409px] 3xl:pb-[490px] pb-[545px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-gray_901 items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] w-[100%]">
              <Image
                src={"images/img_whiteinnotals_1.png"}
                className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] object-contain w-[9%]"
                alt="WHiteInnotals"
              />
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[153px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] ml-[263px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Home
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Events
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Blogs
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                About us
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Contact
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] ml-[264px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Hire Talent
              </Text>
              <Button className="bg-gray_500 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mr-[104px] lg:mr-[60px] xl:mr-[69px] 2xl:mr-[78px] 3xl:mr-[93px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] py-[16px] lg:py-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[9%]">
                Sign up
              </Button>
            </Row>
          </header>
        </Column>
        <Text className="font-bold 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] 2xl:mr-[1120px] 3xl:mr-[1344px] mr-[1493px] lg:mr-[870px] xl:mr-[996px] lg:mt-[187px] xl:mt-[214px] 2xl:mt-[240px] 3xl:mt-[289px] mt-[321px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 w-[auto]">
          Overview
        </Text>
        <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[1066px] 2xl:mr-[1200px] 3xl:mr-[1439px] mr-[1599px] lg:mr-[932px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[10%]"></div>
        <Column className="font-ubuntu items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] mt-[66px] 3xl:px-[115px] px-[128px] lg:px-[74px] xl:px-[85px] 2xl:px-[96px] w-[100%]">
          <Row className="items-start justify-start w-[100%]">
            <Column className="items-start justify-start lg:mb-[120px] xl:mb-[137px] 2xl:mb-[154px] 3xl:mb-[185px] mb-[206px] mt-[103px] lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] pr-[105px] lg:pr-[61px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[54%]">
              <Text className="font-medium leading-[normal] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Quam auctor metus, viverra tellus suspendisse <br />
                placerat tristique felis. Nulla eleifend egestas viverra <br />
                tempus tortor.
              </Text>
              <Text className="font-medium leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Quam auctor metus, viverra tellus suspendisse <br />
                placerat tristique felis. Nulla eleifend egestas viverra <br />
                tempus tortor.
              </Text>
            </Column>
            <div className="bg-gray_501 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] w-[46%]"></div>
          </Row>
        </Column>
        <Text className="font-bold 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] 2xl:mr-[1016px] 3xl:mr-[1219px] mr-[1354px] lg:mr-[789px] xl:mr-[903px] lg:mt-[203px] xl:mt-[232px] 2xl:mt-[261px] 3xl:mt-[313px] mt-[348px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 w-[auto]">
          Innotals Team
        </Text>
        <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[1066px] 2xl:mr-[1200px] 3xl:mr-[1439px] mr-[1599px] lg:mr-[932px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[10%]"></div>
        <Column className="items-center lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] mt-[98px] 3xl:px-[115px] px-[128px] lg:px-[74px] xl:px-[85px] 2xl:px-[96px] w-[100%]">
          <Row className="bg-gray_501 items-center justify-start lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] p-[56px] w-[100%]">
            <div className="bg-gray_901 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] w-[49%]"></div>
            <Column className="items-start 2xl:mb-[102px] 3xl:mb-[123px] mb-[137px] lg:mb-[79px] xl:mb-[91px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] 2xl:mt-[108px] 3xl:mt-[130px] mt-[145px] lg:mt-[84px] xl:mt-[96px] w-[46%]">
              <Text className="font-bold font-inter lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-white_A700 w-[auto]">
                Olatunde Victor
              </Text>
              <Row className="font-inter items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                <Text className="font-medium lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                  Founder/CEO
                </Text>
                <Image
                  src={"images/img_vector_4.png"}
                  className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[3%]"
                  alt="Vector"
                />
              </Row>
              <Text className="font-medium font-ubuntu leading-[normal] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-left text-white_A700 w-[94%]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Quam auctor metus, viverra
                <br /> tellus suspendisse placerat tristique felis. <br />
                Nulla eleifend egestas viverra tempus tortor.
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="font-inter items-end lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] mt-[176px] lg:px-[364px] xl:px-[416px] 2xl:px-[468px] 3xl:px-[561px] px-[624px] w-[100%]">
          <Text className="font-bold lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 w-[auto]">
            Our Vision
          </Text>
          <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 2xl:mr-[101px] 3xl:mr-[121px] mr-[135px] lg:mr-[78px] xl:mr-[90px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[29%]"></div>
        </Column>
        <Column className="font-ubuntu items-center lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[160px] mt-[178px] 3xl:px-[119px] px-[133px] lg:px-[77px] xl:px-[88px] 2xl:px-[99px] w-[100%]">
          <Row className="items-center justify-start w-[98%]">
            <div className="bg-gray_501 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] w-[47%]"></div>
            <Text className="font-medium leading-[normal] lg:mb-[144px] xl:mb-[164px] 2xl:mb-[185px] 3xl:mb-[222px] mb-[247px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] mt-[227px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[49%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Quam auctor metus, viverra tellus suspendisse <br />
              placerat tristique felis. Nulla eleifend egestas viverra <br />
              tempus tortor.
            </Text>
          </Row>
        </Column>
        <Text className="font-bold 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] 2xl:mr-[1063px] 3xl:mr-[1276px] mr-[1417px] lg:mr-[826px] xl:mr-[945px] lg:mt-[192px] xl:mt-[220px] 2xl:mt-[247px] 3xl:mt-[297px] mt-[330px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 w-[auto]">
          Our Mission
        </Text>
        <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[1066px] 2xl:mr-[1200px] 3xl:mr-[1439px] mr-[1599px] lg:mr-[932px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[10%]"></div>
        <Column className="items-center mt-[108px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] pr-[24px] w-[100%]">
          <Row className="font-ubuntu items-start justify-start w-[84%]">
            <Text className="font-medium leading-[normal] lg:mb-[149px] xl:mb-[170px] 2xl:mb-[192px] 3xl:mb-[230px] mb-[256px] lg:mt-[127px] xl:mt-[145px] 2xl:mt-[163px] 3xl:mt-[196px] mt-[218px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Quam auctor metus, viverra tellus suspendisse <br />
              placerat tristique felis. Nulla eleifend egestas viverra <br />
              tempus tortor.
            </Text>
            <div className="bg-gray_501 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] w-[47%]"></div>
          </Row>
          <Stack className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] lg:mt-[257px] xl:mt-[294px] 2xl:mt-[330px] 3xl:mt-[397px] mt-[441px] w-[11%]">
            <Stack className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] w-[71%]">
              <Image
                src={"images/img_unsplashwnolnj.png"}
                className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] object-contain rounded-radius50 w-[auto]"
                alt="unsplashWNoLnJ"
              />
              <Image
                src={"images/img_unsplashlntoq.png"}
                className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] object-contain rounded-radius50 w-[auto]"
                alt="unsplashLnTOq"
              />
            </Stack>
            <Image
              src={"images/img_unsplashkmam6a.png"}
              className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] object-contain rounded-radius50 w-[auto]"
              alt="unsplashKmaM6A"
            />
          </Stack>
          <Text className="font-inter font-normal lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-gray_901 w-[auto]">
            Still have questions?
          </Text>
          <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[10%]"></div>
          <Text className="font-normal font-ubuntu leading-[180.00%] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-center w-[33%]">
            Can’t find the answers you are looking for? Chat with our awesome
            team.
          </Text>
          <Button className="bg-gray_901 font-inter font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] lg:py-[5px] 2xl:py-[6px] xl:py-[6px] 3xl:py-[8px] py-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-gray_51 w-[18%]">
            Request Help
          </Button>
          <Column className="bg-gray_901 justify-start lg:mt-[223px] xl:mt-[255px] 2xl:mt-[287px] 3xl:mt-[344px] mt-[383px] lg:p-[33px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] p-[57px] w-[88%]">
            <Line className="bg-gray_51 h-[88px] mx-[auto] w-[6%]" />
            <Text className="font-inter font-normal lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] lg:mr-[179px] xl:mr-[204px] 2xl:mr-[230px] 3xl:mr-[276px] mr-[307px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_51 w-[auto]">
              Subscribe to our Newsletter
            </Text>
            <Text className="font-normal font-ubuntu lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] leading-[40.00px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37px] mx-[auto] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-gray_51 w-[40%]">
              To be the first to get notified on upcoming events and the release
              of our newsletters.
            </Text>
            <Text className="font-medium font-ubuntu 3xl:ml-[101px] ml-[113px] lg:ml-[65px] xl:ml-[75px] 2xl:ml-[84px] 3xl:mr-[1074px] mr-[1193px] lg:mr-[695px] xl:mr-[795px] 2xl:mr-[895px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_50_af w-[auto]">
              EMAIL ADDRESS
            </Text>
            <Row className="font-ubuntu items-center justify-start lg:mb-[44px] xl:mb-[50px] 2xl:mb-[57px] 3xl:mb-[68px] mb-[76px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] w-[87%]">
              <Column className="border-bw5 border-solid border-white_A700 items-start lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] p-[36px] w-[71%]">
                <Text className="font-normal xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_51 w-[auto]">
                  abayomi.tosin2017@gmail.com
                </Text>
              </Column>
              <Column className="bg-white_A700 font-inter items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] p-[48px] w-[27%]">
                <Text className="font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-gray_901 w-[auto]">
                  Subscribe
                </Text>
              </Column>
            </Row>
          </Column>
          <Stack className="bg-gray_901 lg:h-[575px] xl:h-[658px] 2xl:h-[740px] 3xl:h-[888px] h-[985px] lg:mt-[292px] xl:mt-[334px] 2xl:mt-[376px] 3xl:mt-[452px] mt-[502px] lg:p-[47px] xl:p-[54px] 2xl:p-[60px] 3xl:p-[72px] p-[81px] w-[100%]">
            <Image
              src={"images/img_whiteinnotals_2.png"}
              className="absolute 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] left-[1%] object-contain w-[16%]"
              alt="WHiteInnotals"
            />
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default AboutusPage;
