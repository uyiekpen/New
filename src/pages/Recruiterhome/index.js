import React from "react";

import {
  Column,
  Stack,
  Image,
  Row,
  Input,
  Button,
  Text,
  Line,
  SelectBox,
  List,
} from "components";

const RecruiterhomePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] w-[100%]">
        <header className="w-[89%]">
          <Stack className="bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] w-[100%]">
            <Stack className="absolute bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] xl:pr-[1096px] pr-[1233px] 3xl:pr-[1480px] lg:pr-[959px] right-[0] w-[100%]">
              <Image
                src={"images/img_logo_24.png"}
                className="absolute lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] object-contain w-[98%]"
                alt="Logo"
              />
            </Stack>
            <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] w-[40%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
                WrapClassName="3xl:px-[22px] 3xl:py-[19px] bg-gray_200 flex lg:px-[14px] lg:py-[12px] px-[19px] py-[16px] rounded-radius20 w-[50%] xl:px-[16px] xl:py-[14px]"
                name="Frame117"
                placeholder="Search"
                suffix={
                  <Image
                    onClick={() => setInputvalue("")}
                    src={
                      inputvalue?.length
                        ? "images/close19.svg"
                        : "images/img_magnifyingglass_20.png"
                    }
                    className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                    alt="MagnifyingGlass"
                  />
                }
              ></Input>
              <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                <Image
                  src={"images/img_group5_22.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group5"
                />
              </Button>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[7%]">
                <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                  <Image
                    src={"images/img_group422.png"}
                    className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                    alt="Group422"
                  />
                </Button>
                <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                  3
                </Text>
              </Stack>
              <Image
                src={"images/img_group117_6.png"}
                className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[14%]"
                alt="Group117"
              />
            </Row>
          </Stack>
        </header>
        <Stack className="h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] overflow-auto w-[100%]">
          <Line className="absolute bg-blue_800 h-[1px] 3xl:h-[2px] 2xl:h-[2px] inset-x-[0] mx-[auto] rotate-[-90deg] top-[0] w-[1438px]" />
          <Stack className="absolute h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[18%]">
            <Column className="absolute bg-gray_50 items-start justify-center outline outline-[0.5px] outline-blue_800 lg:p-[31px] xl:p-[35px] p-[40px] 3xl:p-[48px] right-[1%] w-[99%]">
              <Row className="items-center justify-end lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] w-[62%]">
                <Image
                  src={"images/img_suitcasesimple_16.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="SuitcaseSimple"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Interview
                </Text>
              </Row>
              <Row className="items-center justify-end lg:mb-[580px] xl:mb-[663px] mb-[746px] 3xl:mb-[895px] lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[58%]">
                <Image
                  src={"images/img_gear_18.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Gear"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Settings
                </Text>
              </Row>
            </Column>
            <Input
              className="bg-transparent border-0 font-bold p-[0] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
              WrapClassName="3xl:mt-[73px] 3xl:pl-[28px] 3xl:pr-[42px] 3xl:py-[22px] absolute bg-blue_800 flex lg:mt-[47px] lg:pl-[18px] lg:pr-[27px] lg:py-[14px] mt-[61px] pl-[24px] pr-[35px] py-[19px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] top-[6%] w-[68%] xl:mt-[54px] xl:pl-[21px] xl:pr-[31px] xl:py-[16px]"
              name="Group418"
              placeholder="Home"
              prefix={
                <Image
                  src={"images/img_vector_68.png"}
                  className="w-[17.03px] absolute lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
          </Stack>
          <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] w-[88%]">
            <Text className="font-medium lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Post a Job
            </Text>
            <Row className="items-center justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[58%]">
              <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Job field
              </Text>
              <Text className="font-normal lg:ml-[356px] xl:ml-[407px] ml-[458px] 3xl:ml-[549px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Job Requirement
              </Text>
            </Row>
            <Row className="items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[82%]">
              <Column className="items-start justify-start lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:pr-[128px] xl:pr-[146px] pr-[165px] 3xl:pr-[198px] w-[53%]">
                <SelectBox
                  className="bg-transparent font-normal outline outline-[0.5px] outline-blue_800 lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius285 shadow-bs lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[100%]"
                  placeholderClassName="bg-transparent text-gray_900_b2"
                  name="Group114"
                  placeholder="Product design"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Image
                      src={"images/img_vector_69.png"}
                      className="w-[15.48px] h-[7.74px] mr-[21px] object-contain lg:w-[12px] lg:h-[7px] lg:mr-[16px] xl:w-[13px] xl:h-[7px] xl:mr-[18px] 2xl:w-[15px] 2xl:h-[8px] 3xl:w-[18px] 3xl:h-[10px] 3xl:mr-[25px]"
                      alt="Vector"
                    />
                  }
                ></SelectBox>
                <Text className="font-normal lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                  Job description
                </Text>
              </Column>
              <div className="xl:h-[113px] h-[127px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[99px] outline outline-[0.5px] outline-blue_800 rounded-radius40 w-[47%]"></div>
            </Row>
            <Row className="items-center justify-start w-[67%]">
              <div className="lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[58%]"></div>
              <Text className="font-normal lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Add external application link
              </Text>
            </Row>
            <Row className="items-end justify-start w-[82%]">
              <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Salary
              </Text>
              <div className="lg:h-[39px] xl:h-[44px] h-[49px] 2xl:h-[50px] 3xl:h-[59px] lg:ml-[377px] xl:ml-[431px] ml-[485px] 3xl:ml-[582px] outline outline-[0.5px] outline-blue_800 rounded-radius245 w-[47%]"></div>
            </Row>
            <div className="lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[39%]"></div>
            <Button className="bg-blue_800 font-bold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[15%]">
              Post job
            </Button>
            <Text className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Posted Jobs
            </Text>
            <List
              className="lg:gap-[42px] xl:gap-[48px] gap-[55px] 3xl:gap-[66px] grid grid-cols-4 min-h-[auto] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="items-start justify-center outline outline-[1px] outline-blue_800 lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
                <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[72%]">
                  Junior software <br />
                  developer
                </Text>
                <Row className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[61%]">
                  <Image
                    src={"images/img_mappin_7.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[0] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[21%]"
                    alt="MapPin"
                  />
                  <Text className="font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Remote
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] xl:ml-[2px] lg:ml-[2px] ml-[3px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[77%]">
                  <Image
                    src={"images/img_cardholder_5.png"}
                    className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] object-contain w-[22%]"
                    alt="Cardholder"
                  />
                  <Text className="font-normal mb-[1px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    200k - 500k
                  </Text>
                </Row>
              </Column>
              <Column className="items-start justify-center outline outline-[1px] outline-blue_800 lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Back end developer
                </Text>
                <Row className="items-start justify-start ml-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[60%]">
                  <Image
                    src={"images/img_mappin_8.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] object-contain w-[21%]"
                    alt="MapPin"
                  />
                  <Text className="font-normal lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Remote
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[75%]">
                  <Image
                    src={"images/img_cardholder_6.png"}
                    className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] mt-[1px] object-contain w-[22%]"
                    alt="Cardholder"
                  />
                  <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    700k - 900k
                  </Text>
                </Row>
              </Column>
              <Column className="items-start justify-center outline outline-[1px] outline-blue_800 lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
                <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Lead product designer
                </Text>
                <Row className="items-start justify-start xl:ml-[3px] lg:ml-[3px] ml-[4px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[60%]">
                  <Image
                    src={"images/img_mappin_9.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] object-contain w-[20%]"
                    alt="MapPin"
                  />
                  <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Remote
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mb-[17px] xl:mb-[20px] mb-[23px] 3xl:mb-[27px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[76%]">
                  <Image
                    src={"images/img_cardholder_7.png"}
                    className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] object-contain w-[22%]"
                    alt="Cardholder"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    700k - 900k
                  </Text>
                </Row>
              </Column>
              <Column className="items-start justify-center outline outline-[1px] outline-blue_800 lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
                <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Lead product designer
                </Text>
                <Row className="items-start justify-start xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[54%]">
                  <Image
                    src={"images/img_mappin_10.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain w-[23%]"
                    alt="MapPin"
                  />
                  <Text className="font-normal lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] mt-[0] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Hybrid
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] xl:ml-[3px] lg:ml-[3px] ml-[4px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[76%]">
                  <Image
                    src={"images/img_cardholder_8.png"}
                    className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] object-contain w-[22%]"
                    alt="Cardholder"
                  />
                  <Text className="font-normal mb-[0] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    700k - 900k
                  </Text>
                </Row>
              </Column>
            </List>
            <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[94%]">
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[8%]">
                <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[80%]">
                  <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                    <Image
                      src={"images/img_ellipse27_5.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse27"
                    />
                    <Image
                      src={"images/img_ellipse28_5.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse28"
                    />
                  </Stack>
                  <Image
                    src={"images/img_ellipse29_5.png"}
                    className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                    alt="Ellipse29"
                  />
                </Stack>
                <Image
                  src={"images/img_ellipse30_5.png"}
                  className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse30"
                />
              </Stack>
              <Text className="font-normal mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                10 application
              </Text>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] w-[8%]">
                <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[80%]">
                  <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                    <Image
                      src={"images/img_ellipse27_6.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse27"
                    />
                    <Image
                      src={"images/img_ellipse28_6.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse28"
                    />
                  </Stack>
                  <Image
                    src={"images/img_ellipse29_6.png"}
                    className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                    alt="Ellipse29"
                  />
                </Stack>
                <Image
                  src={"images/img_ellipse30_6.png"}
                  className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse30"
                />
              </Stack>
              <Text className="font-normal mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                25 application
              </Text>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] xl:ml-[103px] ml-[116px] 3xl:ml-[139px] lg:ml-[90px] w-[8%]">
                <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[80%]">
                  <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                    <Image
                      src={"images/img_ellipse27_7.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse27"
                    />
                    <Image
                      src={"images/img_ellipse28_7.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse28"
                    />
                  </Stack>
                  <Image
                    src={"images/img_ellipse29_7.png"}
                    className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                    alt="Ellipse29"
                  />
                </Stack>
                <Image
                  src={"images/img_ellipse30_7.png"}
                  className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse30"
                />
              </Stack>
              <Text className="font-normal mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                5 application
              </Text>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[102px] xl:ml-[117px] ml-[132px] 3xl:ml-[158px] w-[8%]">
                <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[80%]">
                  <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                    <Image
                      src={"images/img_ellipse27_8.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse27"
                    />
                    <Image
                      src={"images/img_ellipse28_8.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse28"
                    />
                  </Stack>
                  <Image
                    src={"images/img_ellipse29_8.png"}
                    className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                    alt="Ellipse29"
                  />
                </Stack>
                <Image
                  src={"images/img_ellipse30_8.png"}
                  className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse30"
                />
              </Stack>
              <Text className="font-normal mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                5 application
              </Text>
            </Row>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default RecruiterhomePage;
