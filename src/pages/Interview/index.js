import React from "react";

import {
  Column,
  Row,
  Image,
  Input,
  Button,
  Stack,
  Text,
  Line,
} from "components";

const InterviewPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-roboto items-center justify-start mx-[auto] outline outline-[4px] outline-red_A700 lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] w-[100%]">
        <header className="w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_2.png"}
              className="lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] object-contain w-[4%]"
              alt="Logo"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
              WrapClassName="3xl:ml-[869px] 3xl:px-[22px] 3xl:py-[19px] bg-gray_200 flex lg:ml-[563px] lg:my-[2px] lg:px-[14px] lg:py-[12px] ml-[724px] my-[3px] px-[19px] py-[16px] rounded-radius20 w-[20%] xl:ml-[644px] xl:my-[2px] xl:px-[16px] xl:py-[14px]"
              name="Frame117"
              placeholder="Search"
              suffix={
                <Image
                  onClick={() => setInputvalue("")}
                  src={
                    inputvalue?.length
                      ? "images/close2.svg"
                      : "images/img_magnifyingglass_2.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_4.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group88.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group88"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_1.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_5.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Column className="items-start justify-start lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
          <Line className="bg-blue_800 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Row className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[94%]">
            <Column className="bg-white_A700 items-start justify-center lg:pl-[59px] xl:pl-[68px] pl-[77px] 3xl:pl-[92px] lg:py-[59px] xl:py-[68px] py-[77px] 3xl:py-[92px] shadow-bs2 w-[18%]">
              <Column className="items-start justify-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[61%]">
                <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[82%]">
                  <Image
                    src={"images/img_vector_6.png"}
                    className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                    alt="Vector"
                  />
                  <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[93%]">
                  <Image
                    src={"images/img_chalkboardteach_1.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="ChalkboardTeach"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Mentor
                  </Text>
                </Row>
                <Row className="items-center justify-start ml-[0] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[74%]">
                  <Image
                    src={"images/img_bookopen_1.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="BookOpen"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Test
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Image
                    src={"images/img_notebook_1.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Notebook"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Resume
                  </Text>
                </Row>
              </Column>
              <Input
                className="bg-transparent border-0 font-bold p-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                WrapClassName="3xl:mt-[18px] 3xl:pl-[28px] 3xl:pr-[39px] 3xl:py-[22px] bg-blue_800 flex lg:mt-[11px] lg:pl-[18px] lg:pr-[25px] lg:py-[14px] mt-[15px] pl-[24px] pr-[33px] py-[19px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:mt-[13px] xl:pl-[21px] xl:pr-[29px] xl:py-[16px]"
                name="Group85"
                placeholder="Interview"
                prefix={
                  <Image
                    src={"images/img_suitcasesimple_1.png"}
                    className="w-[24.77px] h-[24.77px] lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px] my-[auto]"
                    alt="SuitcaseSimple"
                  />
                }
              ></Input>
              <Column className="items-start justify-start lg:mb-[248px] xl:mb-[283px] mb-[319px] 3xl:mb-[383px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[75%]">
                <Row className="items-center justify-start w-[100%]">
                  <Image
                    src={"images/img_usersthree_2.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="UsersThree"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Community
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[82%]">
                  <Image
                    src={"images/img_gear_2.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Gear"
                  />
                  <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Settings
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-start justify-start mb-[109px] 3xl:mb-[130px] lg:mb-[84px] xl:mb-[96px] lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[78%]">
              <Text className="font-bold lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-gray_900 w-[auto]">
                Upcoming interview
              </Text>
              <Stack className="lg:h-[223px] xl:h-[255px] h-[286px] 2xl:h-[287px] 3xl:h-[344px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[100%]">
                <Row className="absolute items-start justify-between w-[86%]">
                  <Column className="border border-blue_800 border-solid items-center justify-end xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius20 w-[56%]">
                    <Row className="items-start justify-start mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[90%]">
                      <div className="bg-deep_purple_A200 h-[107px] 2xl:h-[108px] 3xl:h-[129px] lg:h-[84px] xl:h-[96px] lg:mb-[42px] xl:mb-[48px] mb-[55px] 3xl:mb-[66px] rounded-radius10 w-[30%]"></div>
                      <Column className="items-start justify-start lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] w-[64%]">
                        <Text className="font-medium lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                          Product Design role
                        </Text>
                        <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          XYZ limited, Lagos
                        </Text>
                        <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          First stage interview
                        </Text>
                        <Row className="items-center justify-start lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[75%]">
                          <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-green_A700 w-[auto]">
                            Tomorrow
                          </Text>
                          <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_502 w-[auto]">
                            (virtual)
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Button className="bg-green_800 font-bold lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[54%]">
                      Join interview
                    </Button>
                  </Column>
                  <Button className="bg-blue_800 font-bold xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[166px] xl:mt-[190px] mt-[214px] 3xl:mt-[256px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[28%]">
                    View Schedule
                  </Button>
                </Row>
                <Row className="absolute border border-blue_800 border-solid items-start justify-center lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] rounded-radius20 w-[48%]">
                  <div className="bg-orange_A700 h-[107px] 2xl:h-[108px] 3xl:h-[129px] lg:h-[84px] xl:h-[96px] lg:mb-[103px] xl:mb-[118px] mb-[133px] 3xl:mb-[159px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] rounded-radius10 w-[28%]"></div>
                  <Column className="items-start justify-start lg:mb-[59px] xl:mb-[67px] mb-[76px] 3xl:mb-[91px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mr-[38px] xl:mr-[43px] mr-[49px] 3xl:mr-[58px] w-[54%]">
                    <Text className="font-medium lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                      UI designer
                    </Text>
                    <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Exify, Lagos
                    </Text>
                    <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      final interview
                    </Text>
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        15/04/2022
                      </Text>
                      <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_502 w-[auto]">
                        (Physical)
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Stack>
              <Row className="items-center justify-center lg:ml-[367px] xl:ml-[419px] ml-[472px] 3xl:ml-[566px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[10%]">
                <div className="bg-blue_800 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"></div>
                <div className="border border-blue_800 border-solid lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"></div>
                <div className="border border-blue_800 border-solid lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"></div>
              </Row>
              <Text className="font-bold ml-[1px] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Recently completed interview
              </Text>
              <Column className="items-start justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] outline outline-[1px] outline-blue_800 lg:p-[30px] xl:p-[34px] p-[39px] 3xl:p-[46px] rounded-radius10 w-[46%]">
                <Row className="items-center justify-start lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] w-[26%]">
                  <div className="bg-blue_A400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Ogitech
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[43%]">
                  <div className="bg-blue_A400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Afribay, Lagos
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default InterviewPage;
