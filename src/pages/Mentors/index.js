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

const MentorsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] w-[100%]">
        <header className="w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_10.png"}
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
                      ? "images/close9.svg"
                      : "images/img_magnifyingglass_9.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_12.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group243.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group243"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_4.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_24.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Column className="items-center justify-start mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
          <Line className="bg-blue_800 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Row className="items-center justify-between w-[100%]">
            <Column className="items-start outline outline-[0.5px] outline-blue_800 lg:pl-[59px] xl:pl-[67px] pl-[76px] 3xl:pl-[91px] lg:py-[59px] xl:py-[67px] py-[76px] 3xl:py-[91px] w-[18%]">
              <Row className="items-start justify-end ml-[auto] w-[53%]">
                <Image
                  src={"images/img_vector_25.png"}
                  className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[3px] lg:mb-[3px] mb-[4px] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
                <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Home
                </Text>
              </Row>
              <Input
                className="bg-transparent border-0 font-bold p-[0] lg:pl-[25px] xl:pl-[29px] pl-[33px] 3xl:pl-[39px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                WrapClassName="3xl:mt-[31px] 3xl:pb-[21px] 3xl:pl-[31px] 3xl:pr-[42px] 3xl:pt-[24px] bg-blue_800 flex lg:ml-[2px] lg:mt-[20px] lg:pb-[14px] lg:pl-[20px] lg:pr-[27px] lg:pt-[15px] ml-[3px] mt-[26px] pb-[18px] pl-[26px] pr-[35px] pt-[20px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[98%] xl:ml-[2px] xl:mt-[23px] xl:pb-[16px] xl:pl-[23px] xl:pr-[31px] xl:pt-[17px]"
                name="Group238"
                placeholder="Mentor"
                prefix={
                  <Image
                    src={"images/img_vector_26.png"}
                    className="w-[20.13px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                    alt="Vector"
                  />
                }
              ></Input>
              <Column className="items-start justify-start lg:mb-[274px] xl:mb-[314px] mb-[353px] 3xl:mb-[423px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[78%]">
                <Row className="items-center justify-start w-[62%]">
                  <Image
                    src={"images/img_bookopen_4.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="BookOpen"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Test
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[82%]">
                  <Image
                    src={"images/img_notebook_4.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Notebook"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Resume
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[86%]">
                  <Image
                    src={"images/img_suitcasesimple_7.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="SuitcaseSimple"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Interview
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Image
                    src={"images/img_usersthree_6.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="UsersThree"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Community
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[83%]">
                  <Image
                    src={"images/img_gear_9.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Gear"
                  />
                  <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Settings
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-start lg:mb-[55px] xl:mb-[63px] mb-[71px] 3xl:mb-[85px] lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[79%]">
              <Row className="items-start justify-start xl:ml-[1px] lg:ml-[1px] ml-[2px] w-[92%]">
                <Column className="justify-start lg:pr-[256px] xl:pr-[293px] pr-[330px] 3xl:pr-[396px] w-[75%]">
                  <Row className="items-start justify-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mr-[103px] xl:mr-[118px] mr-[133px] 3xl:mr-[159px] w-[69%]">
                    <Text className="font-medium mb-[1px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                      Mentors
                    </Text>
                    <Text className="font-normal 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] mt-[1px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_503 w-[auto]">
                      Task
                    </Text>
                    <Text className="bg-red_A701 font-normal lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      3
                    </Text>
                  </Row>
                  <Column className="items-start justify-start 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                    <Stack className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[75%]">
                      <Line className="absolute bg-gray_503 h-[348px] inset-y-[20%] rounded-radius15 w-[100%]" />
                      <Line className="absolute bg-blue_800 h-[156px] rounded-radius25 w-[45%]" />
                    </Stack>
                    <Row className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Stack className="font-roboto lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] w-[74%]">
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[22%] my-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                          Search for mentors
                        </Text>
                        <Stack className="absolute lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] outline outline-[0.5px] outline-gray_900 lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
                          <Image
                            src={"images/img_magnifyingglass_10.png"}
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-y-[0] left-[1%] my-[auto] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="MagnifyingGlass"
                          />
                        </Stack>
                      </Stack>
                      <Button className="bg-gray_200 font-inter font-normal not-italic lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] rounded-radius10 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[24%]">
                        Filter
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] w-[25%]">
                  <Stack className="h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[100%]">
                    <Stack className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[79%]">
                      <Stack className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[75%]">
                        <Image
                          src={"images/img_ellipse27.png"}
                          className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] object-contain rounded-radius50 w-[auto]"
                          alt="Ellipse27"
                        />
                        <Image
                          src={"images/img_ellipse28.png"}
                          className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] object-contain rounded-radius50 w-[auto]"
                          alt="Ellipse28"
                        />
                      </Stack>
                      <Image
                        src={"images/img_ellipse29.png"}
                        className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse29"
                      />
                    </Stack>
                    <Image
                      src={"images/img_ellipse30.png"}
                      className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse30"
                    />
                  </Stack>
                  <Text className="font-normal lg:ml-[64px] xl:ml-[73px] ml-[83px] 3xl:ml-[99px] lg:mr-[48px] xl:mr-[55px] mr-[62px] 3xl:mr-[74px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Booked mentors
                  </Text>
                </Column>
              </Row>
              <Row className="items-start justify-evenly lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Column className="justify-start lg:pr-[30px] xl:pr-[34px] pr-[39px] 3xl:pr-[46px] w-[77%]">
                  <Row className="items-center justify-start overflow-auto w-[100%]">
                    <div className="overflow-x-auto w-[47%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Row className="items-center justify-end w-[100%]">
                          <Stack className="lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] w-[31%]">
                            <Image
                              src={"images/img_rectangle54.png"}
                              className="absolute lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] left-[1%] object-contain rounded-radius10 w-[99%]"
                              alt="Rectangle54"
                            />
                            <Column className="absolute bg-gradient  items-start justify-end lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] rounded-radius10 w-[100%]">
                              <Text className="font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[197px] xl:mt-[225px] mt-[254px] 3xl:mt-[304px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                                Jenny Davis
                              </Text>
                              <Text className="font-normal lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                                Snr. Product Designer
                              </Text>
                            </Column>
                          </Stack>
                          <Column
                            className="bg-cover bg-repeat items-start lg:ml-[382px] xl:ml-[437px] ml-[492px] 3xl:ml-[590px] xl:px-[1px] lg:px-[1px] px-[2px] w-[31%]"
                            style={{
                              backgroundImage: "url('images/img_group244.png')",
                            }}
                          >
                            <Column className="bg-gradient  items-start justify-end lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] rounded-radius10 w-[80%]">
                              <Text className="font-medium lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[197px] xl:mt-[225px] mt-[254px] 3xl:mt-[304px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                                Ebenezer
                              </Text>
                              <Text className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                                UX Designer
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Text className="font-normal leading-[normal] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc text-left w-[82%]">
                          Jenny is a product designer with over 15 years
                          <br />
                          of experience with expertise in varieties of <br />
                          design tools
                        </Text>
                        <Text className="font-normal lg:ml-[235px] xl:ml-[269px] ml-[303px] 3xl:ml-[363px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-orange_A700 w-[auto]">
                          Read more.....
                        </Text>
                        <Button className="bg-blue_800 font-bold xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[50%]">
                          Schedule
                        </Button>
                      </Column>
                    </div>
                    <div className="mb-[1px] lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] overflow-x-auto w-[97%]">
                      <Row className="items-start justify-evenly w-[100%]">
                        <Column className="items-start justify-start lg:pr-[250px] xl:pr-[286px] pr-[322px] 3xl:pr-[386px] w-[88%]">
                          <Stack className="lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] w-[96%]">
                            <Image
                              src={"images/img_rectangle55.png"}
                              className="absolute lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] left-[0] object-contain rounded-radius10 w-[100%]"
                              alt="Rectangle55"
                            />
                            <Column className="absolute bg-gradient  items-start justify-center xl:p-[3px] lg:p-[3px] p-[4px] rounded-radius10 w-[100%]">
                              <Text className="font-medium lg:mt-[212px] xl:mt-[242px] mt-[273px] 3xl:mt-[327px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                                John Mark
                              </Text>
                              <Text className="font-normal lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                                Lead developer at microsoft
                              </Text>
                            </Column>
                          </Stack>
                          <Text className="font-normal leading-[normal] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc text-left w-[91%]">
                            With over 20 years of experience in software <br />
                            development, has vast knowledge and risen in rank
                            <br />
                            and file at microsoft
                          </Text>
                          <Text className="font-normal lg:ml-[234px] xl:ml-[268px] ml-[302px] 3xl:ml-[362px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-orange_A700 w-[auto]">
                            Read more.....
                          </Text>
                          <Button className="bg-blue_800 font-bold xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[51%]">
                            Schedule
                          </Button>
                        </Column>
                        <Text className="font-normal 3xl:mb-[105px] lg:mb-[68px] xl:mb-[78px] mb-[88px] lg:mt-[336px] xl:mt-[384px] mt-[432px] 3xl:mt-[518px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-orange_A700 w-[auto]">
                          Read more.....
                        </Text>
                      </Row>
                    </div>
                  </Row>
                  <PagerIndicator
                    className="h-[25px] lg:ml-[382px] xl:ml-[437px] ml-[492px] 3xl:ml-[590px] lg:mr-[161px] xl:mr-[185px] mr-[208px] 3xl:mr-[249px] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[auto]"
                    count={4}
                    activeCss="inline-block cursor-pointer w-[24px] h-[24px] bg-blue_800"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer w-[24px] h-[24px] outline-blue_800 outline-[1px] outline"
                    selectedWrapperCss="2xl:mx-[8px] 3xl:mx-[10px] inline-block lg:mx-[6px] mx-[8.50px] xl:mx-[7px]"
                    unselectedWrapperCss="2xl:mx-[8px] 3xl:mx-[10px] inline-block lg:mx-[6px] mx-[8.50px] xl:mx-[7px]"
                  />
                </Column>
                <Column className="items-start justify-start lg:mb-[56px] xl:mb-[64px] mb-[72px] 3xl:mb-[86px] lg:mt-[303px] xl:mt-[346px] mt-[390px] 3xl:mt-[468px] w-[23%]">
                  <Text className="font-normal xl:ml-[1px] lg:ml-[1px] ml-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    A senior UX Designer with experience
                  </Text>
                  <Button className="bg-blue_800 font-bold lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[78%]">
                    Schedule
                  </Button>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MentorsPage;
