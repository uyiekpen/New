import React from "react";

import {
  Column,
  Image,
  Line,
  Text,
  Grid,
  Stack,
  Row,
  Button,
} from "components";

const Desktop3Page = () => {
  return (
    <>
      <Column className="bg-white_A700 border-8 border-red_A700 border-solid font-roboto justify-end mx-[auto] lg:pt-[16px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] w-[100%]">
        <Image
          src={"images/img_logo_13.png"}
          className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] xl:mr-[1131px] mr-[1272px] 3xl:mr-[1527px] lg:mr-[989px] object-contain w-[6%]"
          alt="Logo"
        />
        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <Line className="bg-gray_503 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Text className="font-bold lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-gray_900_cc w-[auto]">
            Almost there
          </Text>
          <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900_cc w-[auto]">
            We want to know more aout you in the tech space
          </Text>
          <Column className="items-start justify-end lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[88%]">
            <div
              className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] overflow-hidden relative w-[100%]"
              name="Group265"
            >
              <div className="w-full h-full absolute bg-gray_400 rounded-[6px]"></div>
              <div
                className="h-full absolute bg-blue_800  rounded-[6px]"
                style={{ width: "57%" }}
              ></div>
            </div>
            <Text className="font-bold xl:ml-[1075px] ml-[1209px] 3xl:ml-[1451px] lg:ml-[940px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_89 underline w-[auto]">
              Skip
            </Text>
            <Grid className="lg:gap-[112px] xl:gap-[128px] gap-[144px] 3xl:gap-[172px] grid grid-cols-2 lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[92%]">
              <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                    UI/UX DESIGN
                  </Text>
                </Column>
                <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[10px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Stack
                </Text>
              </Stack>
              <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                    http://
                  </Text>
                </Column>
                <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Linkedin profile
                </Text>
              </Stack>
              <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                    Design, User research
                  </Text>
                </Column>
                <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Expertise
                </Text>
              </Stack>
              <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                    http://
                  </Text>
                </Column>
                <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Github link
                </Text>
              </Stack>
            </Grid>
            <Row className="items-start justify-start lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] mr-[auto] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[92%]">
              <Stack className="lg:h-[128px] xl:h-[146px] h-[164px] 2xl:h-[165px] 3xl:h-[197px] w-[44%]">
                <Column className="absolute border border-blue_800 border-solid items-center justify-end lg:p-[34px] xl:p-[39px] p-[44px] 3xl:p-[52px] rounded-radius40 w-[100%]">
                  <Text className="font-semibold leading-[normal] mt-[1px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc text-left w-[92%]">
                    A user centric, proactive ui designer
                    <br />
                    with experience in user satisfaction
                  </Text>
                </Column>
                <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  About
                </Text>
              </Stack>
              <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mb-[45px] xl:mb-[52px] mb-[59px] 3xl:mb-[70px] lg:ml-[112px] xl:ml-[128px] ml-[145px] 3xl:ml-[174px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[44%]">
                <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                  <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                    http://
                  </Text>
                </Column>
                <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Portfolio/website link
                </Text>
              </Stack>
            </Row>
            <Button className="bg-blue_800 font-bold lg:ml-[420px] xl:ml-[481px] ml-[541px] 3xl:ml-[649px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[16%]">
              Continue
            </Button>
            <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[40%]">
              <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                  English, French
                </Text>
                <Image
                  src={"images/img_pencilsimple_34.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="PencilSimple"
                />
              </Row>
              <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Languages spoken
              </Text>
            </Stack>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Desktop3Page;
