import React from "react";

import { Column, Image, Line, Text, Stack, Row, Button } from "components";

const Desktop4Page = () => {
  return (
    <>
      <Column className="bg-white_A700 border-8 border-red_A700 border-solid font-roboto justify-start mx-[auto] lg:py-[24px] xl:py-[27px] py-[31px] 3xl:py-[37px] w-[100%]">
        <Image
          src={"images/img_logo_14.png"}
          className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] xl:mr-[1131px] mr-[1272px] 3xl:mr-[1527px] lg:mr-[989px] object-contain w-[6%]"
          alt="Logo"
        />
        <Column className="items-center lg:mb-[63px] xl:mb-[72px] mb-[82px] 3xl:mb-[98px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <Line className="bg-gray_503 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Text className="font-bold lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-gray_900_cc w-[auto]">
            This and you are in
          </Text>
          <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900_cc w-[auto]">
            What are skills you have so we know how to help
          </Text>
          <Column className="items-start justify-start lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[89%]">
            <Stack className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] w-[100%]">
              <div className="absolute bg-gray_400 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] right-[1%] rounded-radius6 w-[99%]"></div>
              <div className="absolute bg-blue_800 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius6 w-[100%]"></div>
            </Stack>
            <Row className="items-center justify-between lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[99%]">
              <Text className="font-bold lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-gray_900_89 w-[auto]">
                Skills and program
              </Text>
              <Text className="font-bold lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-gray_900_89 w-[auto]">
                Skip
              </Text>
            </Row>
            <Row className="items-start justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[56%]">
              <Column className="items-start justify-start lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[52%]">
                <Text className="font-semibold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                  Back End
                </Text>
                <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]">
                  <div className="bg-blue_800 border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    ExpressJS (Node.js)
                  </Text>
                </Row>
                <Row className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[49%]">
                  <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] xl:mb-[2px] lg:mb-[2px] mb-[3px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    Golang
                  </Text>
                </Row>
                <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[67%]">
                  <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    PostgreSQL
                  </Text>
                </Row>
                <Row className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[75%]">
                  <div className="bg-blue_800 border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    PhP Larvel
                  </Text>
                  <Text className="bg-blue_800 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic 3xl:pl-[10px] pl-[9px] pr-[10px] 3xl:pr-[12px] lg:px-[7px] xl:px-[8px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius50 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                    3
                  </Text>
                </Row>
                <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[66%]">
                  <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    PhP MySQL
                  </Text>
                </Row>
                <Text className="font-semibold lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                  Front End
                </Text>
                <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[54%]">
                  <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  <Text className="font-normal lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    React Js
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 items-center justify-center lg:mb-[253px] xl:mb-[290px] mb-[326px] 3xl:mb-[391px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:p-[38px] xl:p-[44px] p-[50px] 3xl:p-[60px] w-[46%]">
                <Text className="font-semibold mt-[1px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_89 w-[auto]">
                  Proficiency
                </Text>
                <Row className="items-center justify-center lg:mb-[28px] xl:mb-[32px] mb-[36px] 3xl:mb-[43px] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[97%]">
                  <Text className="bg-white_A700 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] mt-[1px] not-italic lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    1
                  </Text>
                  <Text className="bg-white_A700 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] not-italic lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    2
                  </Text>
                  <Text className="bg-white_A700 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] not-italic lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    3
                  </Text>
                  <Text className="bg-white_A700 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    4
                  </Text>
                  <Text className="bg-blue_800 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    5
                  </Text>
                </Row>
              </Column>
            </Row>
            <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[14%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Vue Js
              </Text>
            </Row>
            <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[34%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                PhP Laravel on front end
              </Text>
            </Row>
            <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[15%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Angular
              </Text>
            </Row>
            <Text className="font-semibold lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Mobile
            </Text>
            <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[13%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Flutter
              </Text>
            </Row>
            <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[12%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                kotlin
              </Text>
            </Row>
            <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[20%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                React Native
              </Text>
            </Row>
            <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[26%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Vue.Js + webview
              </Text>
            </Row>
            <Text className="font-semibold xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              UI/UX
            </Text>
            <Row className="items-center justify-start lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[17%]">
              <div className="bg-blue_800 border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Figma
              </Text>
              <Text className="bg-blue_800 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic 3xl:pl-[10px] pl-[9px] pr-[10px] 3xl:pr-[12px] lg:px-[7px] xl:px-[8px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius50 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                3
              </Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[21%]">
              <div className="bg-blue_800 border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Adobe XD
              </Text>
              <Text className="bg-blue_800 font-normal lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic 3xl:pl-[10px] pl-[9px] pr-[10px] 3xl:pr-[12px] lg:px-[7px] xl:px-[8px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius50 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                5
              </Text>
            </Row>
            <Text className="font-semibold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Github Actions
            </Text>
            <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[14%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Docker
              </Text>
            </Row>
            <Row className="items-center justify-start xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[27%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Cloud VpS servers
              </Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[15%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Dev Ops
              </Text>
            </Row>
            <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Management
            </Text>
            <Row className="items-center justify-start lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[13%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Scrum
              </Text>
            </Row>
            <Row className="items-center justify-start lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[12%]">
              <div className="border-2 border-blue_800 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius151 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] my-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Agile
              </Text>
            </Row>
            <Text className="font-semibold lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Others (Please Specify)
            </Text>
            <div className="border border-blue_800 border-solid lg:h-[105px] xl:h-[121px] h-[135px] 2xl:h-[136px] 3xl:h-[163px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] rounded-radius30 w-[48%]"></div>
            <Button className="bg-blue_800 font-bold lg:ml-[428px] xl:ml-[490px] ml-[551px] 3xl:ml-[661px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[15%]">
              Proceed
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Desktop4Page;
