import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Stack,
  Line,
  Input,
} from "components";

const Aboutus1Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] lg:pb-[403px] xl:pb-[461px] 2xl:pb-[518px] 3xl:pb-[622px] pb-[691px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-gray_900 items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] w-[100%]">
              <Image
                src={"images/img_whiteinnotals_3.png"}
                className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] object-contain w-[9%]"
                alt="WHiteInnotals"
              />
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[153px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] ml-[263px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Home
              </Text>
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Events
              </Text>
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Blogs
              </Text>
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                About us
              </Text>
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                Contact
              </Text>
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] ml-[264px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                Hire Talent
              </Text>
              <Button className="bg-blue_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mr-[100px] lg:mr-[58px] xl:mr-[66px] 2xl:mr-[75px] 3xl:mr-[90px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] py-[16px] lg:py-[9px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[9%]">
                Sign up
              </Button>
            </Row>
          </header>
        </Column>
        <Text className="font-bold 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] 2xl:mr-[1120px] 3xl:mr-[1344px] mr-[1493px] lg:mr-[870px] xl:mr-[996px] lg:mt-[187px] xl:mt-[214px] 2xl:mt-[240px] 3xl:mt-[289px] mt-[321px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 w-[auto]">
          Overview
        </Text>
        <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[1066px] 2xl:mr-[1200px] 3xl:mr-[1439px] mr-[1599px] lg:mr-[932px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] rounded-radius5 w-[10%]"></div>
        <Column className="font-ubuntu items-center mt-[1px] 3xl:px-[115px] px-[128px] lg:px-[74px] xl:px-[85px] 2xl:px-[96px] w-[100%]">
          <Row className="items-start justify-start w-[100%]">
            <Column className="items-start justify-start 2xl:mb-[106px] 3xl:mb-[127px] mb-[142px] lg:mb-[82px] xl:mb-[94px] xl:mt-[111px] 2xl:mt-[125px] 3xl:mt-[150px] mt-[167px] lg:mt-[97px] pr-[105px] lg:pr-[61px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[54%]">
              <Text className="font-medium leading-[normal] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Quam auctor metus, viverra tellus suspendisse <br />
                placerat tristique felis. Nulla eleifend egestas viverra <br />
                tempus tortor.
              </Text>
              <Text className="font-medium leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Quam auctor metus, viverra tellus suspendisse <br />
                placerat tristique felis. Nulla eleifend egestas viverra <br />
                tempus tortor.
              </Text>
            </Column>
            <Image
              src={"images/img_rectangle154.png"}
              className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] object-contain rounded-radius20 w-[46%]"
              alt="Rectangle154"
            />
          </Row>
        </Column>
        <Text className="font-bold 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] 2xl:mr-[1016px] 3xl:mr-[1219px] mr-[1354px] lg:mr-[789px] xl:mr-[903px] lg:mt-[240px] xl:mt-[274px] 2xl:mt-[309px] 3xl:mt-[371px] mt-[412px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 w-[auto]">
          Innotals Team
        </Text>
        <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[1066px] 2xl:mr-[1200px] 3xl:mr-[1439px] mr-[1599px] lg:mr-[932px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[10%]"></div>
        <Column className="items-center lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] mt-[98px] 3xl:px-[115px] px-[128px] lg:px-[74px] xl:px-[85px] 2xl:px-[96px] w-[100%]">
          <Row className="bg-gray_900_bf items-center justify-start lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] p-[56px] rounded-radius20 w-[100%]">
            <Image
              src={"images/img_rectangle201.png"}
              className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] object-contain rounded-radius20 w-[49%]"
              alt="Rectangle201"
            />
            <Column className="items-start 2xl:mb-[102px] 3xl:mb-[123px] mb-[137px] lg:mb-[79px] xl:mb-[91px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] 2xl:mt-[108px] 3xl:mt-[130px] mt-[145px] lg:mt-[84px] xl:mt-[96px] w-[46%]">
              <Text className="font-bold font-inter lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-white_A700 w-[auto]">
                Olatunde Victor
              </Text>
              <Row className="font-inter items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                <Text className="font-medium lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                  Founder/CEO
                </Text>
                <Image
                  src={"images/img_vector_10.png"}
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
          <Text className="font-bold lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 w-[auto]">
            Our Vision
          </Text>
          <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 2xl:mr-[101px] 3xl:mr-[121px] mr-[135px] lg:mr-[78px] xl:mr-[90px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[29%]"></div>
        </Column>
        <Column className="font-ubuntu items-center lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[160px] mt-[178px] 3xl:px-[119px] px-[133px] lg:px-[77px] xl:px-[88px] 2xl:px-[99px] w-[100%]">
          <Row className="items-center justify-start w-[98%]">
            <Image
              src={"images/img_rectangle156.png"}
              className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] object-contain rounded-radius20 w-[47%]"
              alt="Rectangle156"
            />
            <Text className="font-medium leading-[normal] lg:mb-[144px] xl:mb-[164px] 2xl:mb-[185px] 3xl:mb-[222px] mb-[247px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] mt-[227px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left w-[49%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Quam auctor metus, viverra tellus suspendisse <br />
              placerat tristique felis. Nulla eleifend egestas viverra <br />
              tempus tortor.
            </Text>
          </Row>
        </Column>
        <Text className="font-bold 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] 2xl:mr-[1063px] 3xl:mr-[1276px] mr-[1417px] lg:mr-[826px] xl:mr-[945px] lg:mt-[192px] xl:mt-[220px] 2xl:mt-[247px] 3xl:mt-[297px] mt-[330px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 w-[auto]">
          Our Mission
        </Text>
        <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[1066px] 2xl:mr-[1200px] 3xl:mr-[1439px] mr-[1599px] lg:mr-[932px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[10%]"></div>
        <Column className="items-center mt-[108px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] w-[100%]">
          <Row className="font-ubuntu items-start justify-start w-[83%]">
            <Text className="font-medium leading-[normal] lg:mb-[149px] xl:mb-[170px] 2xl:mb-[192px] 3xl:mb-[230px] mb-[256px] lg:mt-[127px] xl:mt-[145px] 2xl:mt-[163px] 3xl:mt-[196px] mt-[218px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left w-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Quam auctor metus, viverra tellus suspendisse <br />
              placerat tristique felis. Nulla eleifend egestas viverra <br />
              tempus tortor.
            </Text>
            <Image
              src={"images/img_rectangle157.png"}
              className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] object-contain rounded-radius20 w-[47%]"
              alt="Rectangle157"
            />
          </Row>
          <Stack className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] lg:mt-[257px] xl:mt-[294px] 2xl:mt-[330px] 3xl:mt-[397px] mt-[441px] w-[11%]">
            <Stack className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] w-[71%]">
              <Image
                src={"images/img_unsplashwnolnj_1.png"}
                className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] object-contain rounded-radius50 w-[auto]"
                alt="unsplashWNoLnJ"
              />
              <Image
                src={"images/img_unsplashlntoq_1.png"}
                className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] object-contain rounded-radius50 w-[auto]"
                alt="unsplashLnTOq"
              />
            </Stack>
            <Image
              src={"images/img_unsplashkmam6a_1.png"}
              className="absolute lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] object-contain rounded-radius50 w-[auto]"
              alt="unsplashKmaM6A"
            />
          </Stack>
          <Text className="font-inter font-normal lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-gray_900 w-[auto]">
            Still have questions?
          </Text>
          <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[10%]"></div>
          <Text className="font-normal font-ubuntu leading-[180.00%] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_900_99 w-[32%]">
            Can’t find the answers you are looking for? Chat with our awesome
            team.
          </Text>
          <Button className="bg-blue_800 font-inter font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] lg:py-[5px] 2xl:py-[6px] xl:py-[6px] 3xl:py-[8px] py-[9px] rounded-radius10 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-white_A700 w-[18%]">
            Request Help
          </Button>
          <Column className="bg-gray_901 justify-start lg:mt-[256px] xl:mt-[292px] 2xl:mt-[329px] 3xl:mt-[395px] mt-[439px] lg:p-[33px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] p-[57px] w-[87%]">
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
              <Column className="border-bw5 border-solid border-white_A700 items-start lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] p-[36px] rounded-radius10 w-[71%]">
                <Text className="font-normal xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_51 w-[auto]">
                  abayomi.tosin2017@gmail.com
                </Text>
              </Column>
              <Column className="bg-white_A700 font-inter items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] p-[48px] rounded-radius10 w-[27%]">
                <Text className="font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-gray_901 w-[auto]">
                  Subscribe
                </Text>
              </Column>
            </Row>
          </Column>
          <footer className="bg-gray_900 lg:mt-[260px] xl:mt-[297px] 2xl:mt-[334px] 3xl:mt-[401px] mt-[446px] w-[100%]">
            <Column className="justify-start 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[114px] 2xl:mr-[128px] 3xl:mr-[153px] mr-[171px] lg:mr-[99px] lg:my-[47px] xl:my-[54px] 2xl:my-[60px] 3xl:my-[72px] my-[81px] w-[84%]">
              <Image
                src={"images/img_whiteinnotals_4.png"}
                className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] 2xl:mr-[1012px] 3xl:mr-[1214px] mr-[1349px] lg:mr-[786px] xl:mr-[900px] object-contain w-[17%]"
                alt="WHiteInnotals"
              />
              <Column className="items-start justify-start lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] ml-[560px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] mt-[59px] w-[65%]">
                <Row className="font-inter items-center justify-start w-[68%]">
                  <Text className="font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                    Resources
                  </Text>
                  <Text className="font-bold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] ml-[73px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                    Companies
                  </Text>
                  <Text className="font-bold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                    Contact
                  </Text>
                </Row>
                <Row className="font-ubuntu items-start justify-start lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] w-[81%]">
                  <Text className="font-bold lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    About us
                  </Text>
                  <Text className="font-bold lg:ml-[103px] xl:ml-[118px] 2xl:ml-[132px] 3xl:ml-[159px] ml-[177px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Companies
                  </Text>
                  <Image
                    src={"images/img_vector_11.png"}
                    className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] ml-[158px] lg:ml-[92px] object-contain w-[5%]"
                    alt="Vector"
                  />
                  <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[25px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    innotals@gmail.com
                  </Text>
                </Row>
                <Row className="font-ubuntu items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[73%]">
                  <Text className="font-bold lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Terms of service
                  </Text>
                  <Text className="font-bold lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] ml-[93px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Collaborate with us
                  </Text>
                  <Image
                    src={"images/img_vector_12.png"}
                    className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[36px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] object-contain w-[5%]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_13.png"}
                    className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] mb-[0] lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] ml-[43px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] object-contain w-[5%]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_14.png"}
                    className="lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] h-[37px] mb-[0] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px] w-[37px]"
                    alt="Vector"
                  />
                </Row>
                <Text className="font-bold font-ubuntu 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  FAQ
                </Text>
                <Text className="font-bold font-inter lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] ml-[560px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-white_A700 w-[auto]">
                  Subscribe to our newsletter
                </Text>
                <Input
                  className="bg-transparent border-0 font-bold font-inter 3xl:pb-[21px] pb-[24px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] pl-[30px] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] pr-[35px] 3xl:pt-[22px] pt-[25px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] placeholder:text-white_A700_ad text-white_A700_ad w-[100%]"
                  WrapClassName="2xl:ml-[420px] 2xl:mt-[24px] 3xl:ml-[504px] 3xl:mt-[28px] lg:ml-[326px] lg:mt-[18px] ml-[560px] mt-[32px] outline outline-[1px] outline-white_A700 rounded-radius5 w-[47%] xl:ml-[373px] xl:mt-[21px]"
                  name="Group115"
                  placeholder="Enter email address"
                ></Input>
                <Button className="bg-blue_800 font-bold font-inter lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] ml-[560px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] 2xl:py-[10px] 3xl:py-[12px] py-[14px] lg:py-[8px] xl:py-[9px] rounded-radius10 shadow-bs4 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[16%]">
                  Subscribe
                </Button>
              </Column>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default Aboutus1Page;
