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

const MentorstaskPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] pr-[1px] pt-[1px] w-[100%]">
        <header className="lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_25.png"}
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
                      ? "images/close20.svg"
                      : "images/img_magnifyingglass_21.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_23.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group427.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group427"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_11.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_70.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Stack className="3xl:h-[1114px] lg:h-[721px] xl:h-[825px] h-[927px] 2xl:h-[928px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
          <Column className="absolute bottom-[6%] items-start justify-start right-[8%] w-[71%]">
            <Stack className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[35%]">
              <Line className="absolute bg-gray_503 h-[345px] inset-y-[0] my-[auto] rounded-radius15 w-[96%]" />
              <Line className="absolute bg-blue_800 h-[185px] rounded-radius25 w-[51%]" />
            </Stack>
            <Column className="items-start justify-start lg:mt-[457px] xl:mt-[523px] mt-[588px] 3xl:mt-[706px] outline outline-[0.5px] outline-blue_800 lg:p-[25px] xl:p-[29px] p-[33px] 3xl:p-[39px] rounded-radius10 w-[100%]">
              <Row className="items-start justify-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[27%]">
                <div className="bg-blue_A400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:mb-[3px] mb-[4px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                  Schedule your first appointment
                </Text>
              </Row>
              <Row className="items-start justify-start lg:mb-[17px] xl:mb-[20px] mb-[23px] 3xl:mb-[27px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[19%]">
                <div className="bg-blue_A400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:mb-[3px] mb-[4px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                  Complete your profile
                </Text>
              </Row>
            </Column>
          </Column>
          <Stack className="absolute 3xl:h-[1114px] lg:h-[721px] xl:h-[825px] h-[927px] 2xl:h-[928px] w-[100%]">
            <Line className="absolute bg-blue_800 h-[1439px] rotate-[-90deg] w-[100%]" />
            <Column className="absolute items-start justify-start left-[0] outline outline-[0.5px] outline-blue_800 lg:pl-[59px] xl:pl-[68px] pl-[77px] 3xl:pl-[92px] lg:py-[59px] xl:py-[68px] py-[77px] 3xl:py-[92px] w-[17%]">
              <Row className="items-center justify-end ml-[auto] w-[50%]">
                <Image
                  src={"images/img_vector_71.png"}
                  className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
                <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Home
                </Text>
              </Row>
              <Input
                className="bg-transparent border-0 font-bold p-[0] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                WrapClassName="3xl:mt-[33px] 3xl:pl-[31px] 3xl:pr-[42px] 3xl:py-[22px] bg-blue_800 flex lg:mt-[21px] lg:pl-[20px] lg:pr-[27px] lg:py-[14px] mt-[28px] pl-[26px] pr-[35px] py-[19px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:mt-[24px] xl:pl-[23px] xl:pr-[31px] xl:py-[16px]"
                name="Group425"
                placeholder="Mentor"
                prefix={
                  <Image
                    src={"images/img_vector_72.png"}
                    className="w-[20.13px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                    alt="Vector"
                  />
                }
              ></Input>
              <Column className="items-start justify-start lg:mb-[274px] xl:mb-[314px] mb-[353px] 3xl:mb-[423px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[76%]">
                <Row className="items-center justify-start w-[60%]">
                  <Image
                    src={"images/img_bookopen_9.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="BookOpen"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Test
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[81%]">
                  <Image
                    src={"images/img_notebook_9.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Notebook"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Resume
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[85%]">
                  <Image
                    src={"images/img_suitcasesimple_17.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="SuitcaseSimple"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Interview
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Image
                    src={"images/img_usersthree_12.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="UsersThree"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Community
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[82%]">
                  <Image
                    src={"images/img_gear_19.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Gear"
                  />
                  <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Settings
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="absolute justify-start left-[21%] top-[7%] w-[44%]">
              <Row className="items-center justify-start lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mr-[250px] xl:mr-[286px] mr-[322px] 3xl:mr-[386px] w-[47%]">
                <Text className="font-normal mb-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_503 w-[auto]">
                  Mentors
                </Text>
                <Text className="font-medium ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] mt-[1px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900_cc w-[auto]">
                  Task
                </Text>
              </Row>
              <Column className="items-start justify-start ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[134px] xl:mr-[153px] mr-[173px] 3xl:mr-[207px] lg:mt-[47px] xl:mt-[54px] mt-[61px] 3xl:mt-[73px] w-[71%]">
                <Row className="items-center justify-start w-[56%]">
                  <div className="bg-blue_800 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"></div>
                  <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    Draw out your monthly plan
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <div className="bg-blue_800 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"></div>
                  <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    Check the meaning of padding and alignment on google
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[59%]">
                  <div className="bg-blue_800 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"></div>
                  <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    Watch the youtube video sent
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[98%]">
                  <div className="bg-blue_800 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"></div>
                  <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    <span className="text-gray_900 font-roboto">
                      Join my slack channel
                    </span>
                    <span className="text-blue_800_aa font-roboto">
                      {" "}
                      http//:slack.com/johnbosco247
                    </span>
                  </Text>
                </Row>
              </Column>
              <Column className="items-start justify-start lg:mt-[41px] xl:mt-[47px] mt-[53px] 3xl:mt-[63px] w-[100%]">
                <div className="lg:h-[57px] xl:h-[65px] h-[73px] 2xl:h-[74px] 3xl:h-[88px] outline outline-[0.5px] outline-blue_800 rounded-radius10 shadow-bs20 w-[100%]"></div>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[60%]">
                  <Button
                    className="3xl:px-[38px] 3xl:py-[19px] border border-blue_800 border-solid flex items-center justify-between lg:px-[24px] lg:py-[12px] px-[32px] py-[16px] rounded-radius10 text-center w-[47%] xl:px-[28px] xl:py-[14px]"
                    rightIcon={
                      <Image
                        src={"images/img_uploadsimple.png"}
                        className="w-[24px] h-[24px] text-center lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="UploadSimple"
                      />
                    }
                  >
                    <div className="bg-transparent font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_800">
                      Upload
                    </div>
                  </Button>
                  <Button className="bg-blue_800 font-bold lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[47%]">
                    Submit
                  </Button>
                </Row>
                <Text className="font-bold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Recently completed task
                </Text>
              </Column>
            </Column>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default MentorstaskPage;
