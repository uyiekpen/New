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
  PagerIndicator,
} from "components";

const TalenthomePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] pr-[1px] pt-[1px] w-[100%]">
        <header className="lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_1.png"}
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
                      ? "images/close1.svg"
                      : "images/img_magnifyingglass_1.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_3.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group75.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group75"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_2.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Column className="items-start justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
          <Line className="bg-blue_800 h-[1439px] rotate-[-90deg] w-[100%]" />
          <Row className="items-center justify-start w-[95%]">
            <Column className="bg-gray_50 items-center outline outline-[0.5px] outline-blue_800 lg:pl-[45px] xl:pl-[52px] pl-[59px] 3xl:pl-[70px] lg:py-[45px] xl:py-[52px] py-[59px] 3xl:py-[70px] w-[19%]">
              <Input
                className="bg-transparent border-0 font-bold p-[0] lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                WrapClassName="3xl:pb-[24px] 3xl:pl-[31px] 3xl:pr-[42px] 3xl:pt-[21px] bg-blue_800 flex lg:pb-[15px] lg:pl-[20px] lg:pr-[27px] lg:pt-[14px] pb-[20px] pl-[26px] pr-[35px] pt-[18px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[89%] xl:pb-[17px] xl:pl-[23px] xl:pr-[31px] xl:pt-[16px]"
                name="Group73"
                placeholder="Home"
                prefix={
                  <Image
                    src={"images/img_vector_3.png"}
                    className="w-[18.58px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px] my-[auto]"
                    alt="Vector"
                  />
                }
              ></Input>
              <Column className="items-start justify-start lg:mb-[282px] xl:mb-[322px] mb-[363px] 3xl:mb-[435px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[67%]">
                <Row className="items-end justify-start w-[75%]">
                  <Image
                    src={"images/img_chalkboardteach.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="ChalkboardTeach"
                  />
                  <Text className="font-normal mb-[0] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Mentor
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[60%]">
                  <Image
                    src={"images/img_bookopen.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="BookOpen"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Test
                  </Text>
                </Row>
                <Row className="items-end justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[81%]">
                  <Image
                    src={"images/img_notebook.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[0] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Notebook"
                  />
                  <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Resume
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[85%]">
                  <Image
                    src={"images/img_suitcasesimple.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="SuitcaseSimple"
                  />
                  <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] mt-[0] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Interview
                  </Text>
                </Row>
                <Row className="items-end justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[100%]">
                  <Image
                    src={"images/img_usersthree_1.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="UsersThree"
                  />
                  <Text className="font-normal mb-[0] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Community
                  </Text>
                </Row>
                <Row className="items-end justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[82%]">
                  <Image
                    src={"images/img_gear_1.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Gear"
                  />
                  <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Settings
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-start lg:mb-[63px] xl:mb-[72px] mb-[81px] 3xl:mb-[97px] lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] lg:mt-[50px] xl:mt-[57px] mt-[65px] 3xl:mt-[78px] w-[78%]">
              <Text className="font-bold lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-gray_900 w-[auto]">
                <span className="text-blue_A400 font-roboto">Hello</span>
                <span className="text-gray_900 font-roboto">, John Felix</span>
              </Text>
              <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] outline outline-[0.5px] outline-blue_800 lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius20 w-[100%]">
                <Column className="items-start lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] pr-[100px] 3xl:pr-[120px] lg:pr-[77px] xl:pr-[88px] w-[88%]">
                  <Row className="items-start justify-start w-[92%]">
                    <Text className="font-medium lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                      Complete your profile now
                    </Text>
                    <Text className="font-normal lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[162px] xl:ml-[185px] ml-[209px] 3xl:ml-[250px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      60% Complete
                    </Text>
                  </Row>
                  <div
                    className="lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] overflow-hidden relative w-[100%]"
                    name="Group76"
                  >
                    <div className="w-full h-full absolute bg-blue_A200_3a rounded-[3px]"></div>
                    <div
                      className="h-full absolute bg-blue_800  rounded-[3px]"
                      style={{ width: "61%" }}
                    ></div>
                  </div>
                </Column>
                <Stack className="lg:h-[53px] xl:h-[60px] h-[67px] 2xl:h-[68px] 3xl:h-[81px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] w-[7%]">
                  <div className="absolute bg-white_A700 lg:h-[53px] xl:h-[60px] h-[67px] 2xl:h-[68px] 3xl:h-[81px] rounded-radius35 shadow-bs w-[100%]"></div>
                  <Image
                    src={"images/img_arrowright.png"}
                    className="absolute lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] inset-[0] justify-center m-[auto] object-contain w-[56%]"
                    alt="ArrowRight"
                  />
                </Stack>
              </Row>
              <Row className="items-center justify-between lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Row className="bg-white_A700_90 items-start justify-start mb-[1px] lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px] rounded-radius20 w-[58%]">
                  <Column className="justify-start lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pr-[35px] xl:pr-[40px] pr-[46px] 3xl:pr-[55px] w-[72%]">
                    <Row className="items-start justify-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mr-[113px] xl:mr-[129px] mr-[146px] 3xl:mr-[175px] w-[58%]">
                      <div className="bg-blue_800 lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mb-[3px] lg:mb-[3px] mb-[4px] xl:mt-[1px] lg:mt-[1px] mt-[2px] rounded-radius5 w-[4%]"></div>
                      <Text className="font-medium lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                        Performance
                      </Text>
                    </Row>
                    <Stack className="lg:h-[289px] xl:h-[331px] h-[371px] 2xl:h-[372px] 3xl:h-[446px] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[100%]">
                      <Stack className="absolute lg:h-[289px] xl:h-[331px] h-[371px] 2xl:h-[372px] 3xl:h-[446px] w-[100%]">
                        <div className="absolute lg:h-[268px] xl:h-[307px] h-[344px] 2xl:h-[345px] 3xl:h-[414px] inset-[0] justify-center m-[auto] rotate-[-96deg] w-[93%]"></div>
                        <div className="absolute lg:h-[289px] xl:h-[331px] h-[371px] 2xl:h-[372px] 3xl:h-[446px] rotate-[-78deg] w-[100%]"></div>
                      </Stack>
                      <Text className="absolute bottom-[10%] font-normal leading-[normal] left-[10%] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]">
                        <span className="text-gray_900 font-roboto">
                          Test <br />
                        </span>
                        <span className="text-gray_900 font-roboto font-semibold">
                          40%
                        </span>
                      </Text>
                      <Text className="absolute font-normal leading-[normal] not-italic right-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 top-[14%] w-[18%]">
                        <span className="text-gray_900 font-roboto">
                          Interview
                          <br />
                        </span>
                        <span className="text-gray_900 font-roboto font-semibold">
                          20%
                        </span>
                      </Text>
                    </Stack>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] w-[23%]">
                    <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Test
                    </Text>
                    <Column className="items-center justify-start lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[75%]">
                      <Stack className="xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] w-[100%]">
                        <Image
                          src={"images/img_group15.png"}
                          className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] object-cover w-[100%]"
                          alt="Group15"
                        />
                        <Text className="absolute font-semibold inset-x-[0] mx-[auto] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[max-content]">
                          40%
                        </Text>
                      </Stack>
                      <Text className="font-normal lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Interview
                      </Text>
                      <Stack className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                        <div className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[100%]"></div>
                        <Text className="absolute font-semibold inset-x-[0] mx-[auto] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[max-content]">
                          20%
                        </Text>
                      </Stack>
                    </Column>
                    <Text className="font-normal lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-green_900 w-[auto]">
                      20% from last week
                    </Text>
                  </Column>
                </Row>
                <Column className="items-center w-[38%]">
                  <Column className="items-center justify-end outline outline-[0.5px] outline-blue_800_90 p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius20 shadow-bs1 w-[100%]">
                    <Row className="items-start justify-end lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[91%]">
                      <div className="bg-blue_800 lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mb-[3px] lg:mb-[3px] mb-[4px] xl:mt-[1px] lg:mt-[1px] mt-[2px] rounded-radius52 w-[3%]"></div>
                      <Text className="font-medium lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                        Jobs
                      </Text>
                      <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[117px] xl:ml-[134px] ml-[151px] 3xl:ml-[181px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[18px] xl:text-[20px] text-[23.25px] 2xl:text-[23px] 3xl:text-[27px] text-gray_900_ba w-[auto]">
                        View all
                      </Text>
                    </Row>
                    <Column className="items-start justify-start lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[79%]">
                      <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Junior software developer
                      </Text>
                      <Row className="items-start justify-start ml-[1px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[40%]">
                        <Image
                          src={"images/img_mappin.png"}
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[3px] lg:mb-[3px] mb-[4px] object-contain w-[21%]"
                          alt="MapPin"
                        />
                        <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[18px] xl:text-[20px] text-[23.25px] 2xl:text-[23px] 3xl:text-[27px] text-gray_900 w-[auto]">
                          Remote
                        </Text>
                      </Row>
                      <Row className="items-start justify-start ml-[1px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[99%]">
                        <Image
                          src={"images/img_cardholder.png"}
                          className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] mt-[0] object-contain w-[12%]"
                          alt="Cardholder"
                        />
                        <Text className="font-normal lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] xl:my-[2px] lg:my-[2px] my-[3px] not-italic lg:text-[18px] xl:text-[20px] text-[23.25px] 2xl:text-[23px] 3xl:text-[27px] text-gray_900 w-[auto]">
                          200k - 500k
                        </Text>
                        <Button className="bg-blue_800 font-normal xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] not-italic lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[23%]">
                          View
                        </Button>
                      </Row>
                      <PagerIndicator
                        className="h-[15px] xl:ml-[109px] ml-[123px] 3xl:ml-[147px] lg:ml-[95px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[auto]"
                        count={3}
                        activeCss="inline-block cursor-pointer w-[15.59px] h-[15px] bg-blue_800"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[15.59px] h-[15px] outline-blue_800 outline-[0.5px] outline bg-gray_200"
                        selectedWrapperCss="2xl:mx-[4px] 3xl:mx-[4px] inline-block lg:mx-[3px] mx-[4.16px] xl:mx-[3px]"
                        unselectedWrapperCss="2xl:mx-[4px] 3xl:mx-[4px] inline-block lg:mx-[3px] mx-[4.16px] xl:mx-[3px]"
                      />
                    </Column>
                  </Column>
                  <Column className="items-start justify-end lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] outline outline-[0.5px] outline-blue_800_90 lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] rounded-radius20 shadow-bs1 w-[100%]">
                    <Row className="items-start justify-start lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[94%]">
                      <div className="bg-blue_800 lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mb-[3px] lg:mb-[3px] mb-[4px] xl:mt-[1px] lg:mt-[1px] mt-[2px] rounded-radius518 w-[3%]"></div>
                      <Text className="font-medium lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                        Events
                      </Text>
                      <Text className="font-normal lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[101px] xl:ml-[115px] ml-[130px] 3xl:ml-[156px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[18px] xl:text-[20px] text-[23.25px] 2xl:text-[23px] 3xl:text-[27px] text-gray_900_ba w-[auto]">
                        View all
                      </Text>
                    </Row>
                    <Row className="items-center justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[88%]">
                      <div className="bg-blue_800 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] rounded-radius778 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div>
                      <Text className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Career building conference..
                      </Text>
                    </Row>
                    <Row className="items-start justify-start lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] mr-[auto] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[67%]">
                      <Image
                        src={"images/img_mappin_1.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mt-[1px] object-contain w-[10%]"
                        alt="MapPin"
                      />
                      <Text className="font-normal xl:mb-[3px] lg:mb-[3px] mb-[4px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Zoom
                      </Text>
                      <Image
                        src={"images/img_calendarblank.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] object-contain w-[10%]"
                        alt="CalendarBlank"
                      />
                      <Text className="font-normal xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Feb 24
                      </Text>
                    </Row>
                    <Row className="items-center justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] mr-[auto] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[78%]">
                      <div className="bg-blue_800 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] rounded-radius778 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div>
                      <Text className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Dev community meeting
                      </Text>
                    </Row>
                    <Row className="items-start justify-start lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] mr-[auto] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[67%]">
                      <Image
                        src={"images/img_mappin_2.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[3px] lg:mb-[3px] mb-[4px] object-contain w-[10%]"
                        alt="MapPin"
                      />
                      <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Zoom
                      </Text>
                      <Image
                        src={"images/img_calendarblank_1.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-contain w-[10%]"
                        alt="CalendarBlank"
                      />
                      <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        Feb 24
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default TalenthomePage;
