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
  List,
} from "components";

const MentorshomePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-roboto items-start justify-start mx-[auto] lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[89%]">
            <Stack className="bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] w-[100%]">
              <Stack className="absolute bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] xl:pr-[1096px] pr-[1233px] 3xl:pr-[1480px] lg:pr-[959px] right-[0] w-[100%]">
                <Image
                  src={"images/img_logo_18.png"}
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
                          ? "images/close15.svg"
                          : "images/img_magnifyingglass_16.png"
                      }
                      className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                      alt="MagnifyingGlass"
                    />
                  }
                ></Input>
                <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                  <Image
                    src={"images/img_group5_18.png"}
                    className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                    alt="Group5"
                  />
                </Button>
                <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[7%]">
                  <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                    <Image
                      src={"images/img_group363.png"}
                      className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                      alt="Group363"
                    />
                  </Button>
                  <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                    3
                  </Text>
                </Stack>
                <Image
                  src={"images/img_group117_5.png"}
                  className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[14%]"
                  alt="Group117"
                />
              </Row>
            </Stack>
          </header>
          <Line className="bg-blue_800 h-[1440px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] rotate-[-90deg] w-[100%]" />
          <Row className="items-start justify-start lg:mt-[45px] xl:mt-[52px] mt-[59px] 3xl:mt-[70px] w-[89%]">
            <Input
              className="bg-transparent border-0 font-bold p-[0] lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
              WrapClassName="3xl:pl-[31px] 3xl:pr-[42px] 3xl:py-[22px] bg-blue_800 flex lg:pl-[20px] lg:pr-[27px] lg:py-[14px] pl-[26px] pr-[35px] py-[19px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[14%] xl:pl-[23px] xl:pr-[31px] xl:py-[16px]"
              name="Group356"
              placeholder="Home"
              prefix={
                <Image
                  src={"images/img_vector_52.png"}
                  className="w-[18.58px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
            <Text className="font-medium xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Scheduled Sessions
            </Text>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[501px] xl:ml-[573px] ml-[645px] 3xl:ml-[774px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[9%]">
              <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[83%]">
                <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[81%]">
                  <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[77%]">
                    <Image
                      src={"images/img_ellipse27_1.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse27"
                    />
                    <Image
                      src={"images/img_ellipse28_1.png"}
                      className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                      alt="Ellipse28"
                    />
                  </Stack>
                  <Image
                    src={"images/img_ellipse29_1.png"}
                    className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                    alt="Ellipse29"
                  />
                </Stack>
                <Image
                  src={"images/img_ellipse30_1.png"}
                  className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse30"
                />
              </Stack>
              <Text className="absolute bg-blue_800 font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                2
              </Text>
            </Stack>
          </Row>
        </Column>
        <Column className="items-end lg:mb-[322px] xl:mb-[368px] mb-[414px] 3xl:mb-[497px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] 3xl:px-[100px] lg:px-[65px] xl:px-[74px] px-[84px] w-[100%]">
          <Row className="items-start justify-end w-[95%]">
            <Column className="items-start justify-start lg:mb-[1203px] xl:mb-[1376px] mb-[1547px] 2xl:mb-[1548px] 3xl:mb-[1857px] lg:pr-[49px] xl:pr-[56px] pr-[63px] 3xl:pr-[75px] w-[12%]">
              <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                Community
              </Text>
              <Text className="font-normal ml-[1px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                Settings
              </Text>
            </Column>
            <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[88%]">
              <List
                className="xl:gap-[105px] gap-[118.78px] 2xl:gap-[118px] 3xl:gap-[142px] lg:gap-[92px] grid grid-cols-2 min-h-[auto] w-[91%]"
                orientation="horizontal"
              >
                <Row className="items-end justify-evenly w-[100%]">
                  <Column className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pr-[34px] xl:pr-[39px] pr-[44px] 3xl:pr-[52px] w-[52%]">
                    <Image
                      src={"images/img_rectangle89_12.png"}
                      className="lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] object-contain rounded-radius20 w-[99%]"
                      alt="Rectangle89"
                    />
                    <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_93 w-[auto]">
                      Virtual
                    </Text>
                  </Column>
                  <Column className="items-start justify-start w-[48%]">
                    <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Daniel james
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Product designer
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      22/04/2022
                    </Text>
                    <Button className="bg-green_901 font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                      Start session
                    </Button>
                  </Column>
                </Row>
                <Row className="items-end justify-evenly w-[100%]">
                  <Column className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pr-[34px] xl:pr-[39px] pr-[44px] 3xl:pr-[52px] w-[54%]">
                    <Image
                      src={"images/img_rectangle89_13.png"}
                      className="lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] object-contain rounded-radius20 w-[99%]"
                      alt="Rectangle89"
                    />
                    <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_93 w-[auto]">
                      Virtual
                    </Text>
                  </Column>
                  <Column className="items-start justify-start w-[46%]">
                    <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Isreal Banton
                    </Text>
                    <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[99%]">
                      Jnr Product designer
                    </Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      23/04/2022
                    </Text>
                    <Button className="bg-blue_800 font-bold lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                      View bio
                    </Button>
                  </Column>
                </Row>
              </List>
              <Column className="justify-start 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] mt-[91px] w-[100%]">
                <Row className="items-start justify-between lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] w-[99%]">
                  <Text className="font-medium lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    Session Request
                  </Text>
                  <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] w-[12%]">
                    <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[83%]">
                      <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[81%]">
                        <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[77%]">
                          <Image
                            src={"images/img_ellipse27_2.png"}
                            className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                            alt="Ellipse27"
                          />
                          <Image
                            src={"images/img_ellipse28_2.png"}
                            className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                            alt="Ellipse28"
                          />
                        </Stack>
                        <Image
                          src={"images/img_ellipse29_2.png"}
                          className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                          alt="Ellipse29"
                        />
                      </Stack>
                      <Image
                        src={"images/img_ellipse30_2.png"}
                        className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse30"
                      />
                    </Stack>
                    <Text className="absolute bg-blue_800 font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      2
                    </Text>
                  </Stack>
                </Row>
                <List
                  className="gap-[110.41px] 2xl:gap-[110px] 3xl:gap-[132px] lg:gap-[85px] xl:gap-[98px] grid grid-cols-2 min-h-[auto] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mr-[30px] xl:mr-[34px] mr-[39px] 3xl:mr-[46px] lg:mt-[40px] xl:mt-[46px] mt-[52px] 3xl:mt-[62px] w-[93%]"
                  orientation="horizontal"
                >
                  <Column className="items-center justify-start lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Row className="items-start justify-between w-[97%]">
                      <Image
                        src={"images/img_rectangle89_14.png"}
                        className="lg:h-[111px] xl:h-[127px] h-[142px] 2xl:h-[143px] 3xl:h-[171px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain rounded-radius20 w-[45%]"
                        alt="Rectangle89"
                      />
                      <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] w-[44%]">
                        <Text className="font-bold ml-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Victor Braman
                        </Text>
                        <Text className="font-normal ml-[0] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Product designer
                        </Text>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                          WrapClassName="3xl:mt-[14px] bg-white_A700 lg:mt-[9px] mt-[12px] rounded-radius10 shadow-bs17 w-[100%] xl:mt-[10px]"
                          name="Group32"
                          placeholder="22/04/2022"
                        ></Input>
                      </Column>
                    </Row>
                    <Row className="items-end justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Input
                        className="bg-transparent border-0 font-normal not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[24px] xl:pl-[27px] pl-[31px] 3xl:pl-[37px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:pt-[10px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                        WrapClassName="3xl:mt-[9px] bg-white_A700 lg:mt-[6px] mt-[8px] rounded-radius10 shadow-bs17 w-[42%] xl:mt-[7px]"
                        name="Group33"
                        placeholder="Virtual"
                      ></Input>
                      <Button className="bg-blue_800 font-bold lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[46%]">
                        Schedule
                      </Button>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] w-[100%]">
                    <Row className="items-start justify-between w-[96%]">
                      <Image
                        src={"images/img_rectangle89_15.png"}
                        className="lg:h-[111px] xl:h-[127px] h-[142px] 2xl:h-[143px] 3xl:h-[171px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain rounded-radius20 w-[45%]"
                        alt="Rectangle89"
                      />
                      <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] w-[44%]">
                        <Text className="font-bold ml-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Victor Braman
                        </Text>
                        <Text className="font-normal ml-[0] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Product designer
                        </Text>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                          WrapClassName="3xl:mt-[14px] bg-white_A700 lg:mt-[9px] mt-[12px] rounded-radius10 shadow-bs17 w-[100%] xl:mt-[10px]"
                          name="Group32"
                          placeholder="22/04/2022"
                        ></Input>
                      </Column>
                    </Row>
                    <Row className="items-end justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Input
                        className="bg-transparent border-0 font-normal not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:pt-[10px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                        WrapClassName="3xl:mt-[9px] bg-white_A700 lg:mt-[6px] mt-[8px] rounded-radius10 shadow-bs17 w-[42%] xl:mt-[7px]"
                        name="Group33"
                        placeholder="Virtual"
                      ></Input>
                      <Button className="bg-blue_800 font-bold lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[46%]">
                        Schedule
                      </Button>
                    </Row>
                  </Column>
                </List>
                <Row className="items-start justify-between xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] mt-[104px] 3xl:mt-[124px] lg:mt-[80px] xl:mt-[92px] w-[98%]">
                  <Text className="font-medium mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                    All mentees
                  </Text>
                  <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] w-[12%]">
                    <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[83%]">
                      <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[81%]">
                        <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[77%]">
                          <Image
                            src={"images/img_ellipse27_3.png"}
                            className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                            alt="Ellipse27"
                          />
                          <Image
                            src={"images/img_ellipse28_3.png"}
                            className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                            alt="Ellipse28"
                          />
                        </Stack>
                        <Image
                          src={"images/img_ellipse29_3.png"}
                          className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                          alt="Ellipse29"
                        />
                      </Stack>
                      <Image
                        src={"images/img_ellipse30_3.png"}
                        className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse30"
                      />
                    </Stack>
                    <Text className="absolute bg-blue_800 font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      1
                    </Text>
                  </Stack>
                </Row>
                <List
                  className="lg:gap-[105px] xl:gap-[120px] gap-[135.71px] 2xl:gap-[135px] 3xl:gap-[162px] grid grid-cols-2 min-h-[auto] lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] lg:mr-[31px] xl:mr-[35px] mr-[40px] 3xl:mr-[48px] lg:mt-[41px] xl:mt-[47px] mt-[53px] 3xl:mt-[63px] w-[91%]"
                  orientation="horizontal"
                >
                  <Row className="items-end justify-evenly w-[100%]">
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pr-[34px] xl:pr-[39px] pr-[44px] 3xl:pr-[52px] w-[54%]">
                      <Image
                        src={"images/img_rectangle89_16.png"}
                        className="lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] object-contain rounded-radius20 w-[99%]"
                        alt="Rectangle89"
                      />
                      <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_93 w-[auto]">
                        Virtual
                      </Text>
                    </Column>
                    <Column className="items-start justify-start w-[46%]">
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Isreal Banton
                      </Text>
                      <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[99%]">
                        Jnr Product designer
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        23/04/2022
                      </Text>
                      <Button className="bg-blue_800 font-bold lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                        View bio
                      </Button>
                    </Column>
                  </Row>
                  <Row className="items-end justify-evenly w-[100%]">
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pr-[34px] xl:pr-[39px] pr-[44px] 3xl:pr-[52px] w-[54%]">
                      <Image
                        src={"images/img_rectangle89_17.png"}
                        className="lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] object-contain rounded-radius20 w-[99%]"
                        alt="Rectangle89"
                      />
                      <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_93 w-[auto]">
                        Virtual
                      </Text>
                    </Column>
                    <Column className="items-start justify-start w-[46%]">
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Isreal Banton
                      </Text>
                      <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[99%]">
                        Jnr Product designer
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        23/04/2022
                      </Text>
                      <Button className="bg-blue_800 font-bold lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                        View bio
                      </Button>
                    </Column>
                  </Row>
                </List>
                <Text className="font-medium xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mr-[640px] xl:mr-[732px] mr-[823px] 3xl:mr-[988px] mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                  Assesment Test
                </Text>
                <Row className="items-center justify-start lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:mr-[562px] xl:mr-[643px] mr-[723px] 3xl:mr-[868px] lg:mt-[213px] xl:mt-[243px] mt-[274px] 3xl:mt-[328px] w-[28%]">
                  <Text className="font-normal lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_800_7f w-[auto]">
                    Add Mentees
                  </Text>
                  <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[41%]">
                    <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[80%]">
                      <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[80%]">
                        <Stack className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                          <Image
                            src={"images/img_ellipse27_4.png"}
                            className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                            alt="Ellipse27"
                          />
                          <Image
                            src={"images/img_ellipse28_4.png"}
                            className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                            alt="Ellipse28"
                          />
                        </Stack>
                        <Image
                          src={"images/img_ellipse29_4.png"}
                          className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                          alt="Ellipse29"
                        />
                      </Stack>
                      <Image
                        src={"images/img_ellipse30_4.png"}
                        className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse30"
                      />
                    </Stack>
                    <Text className="absolute bg-blue_800 font-normal lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] leading-[normal] not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-white_A700 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      2
                    </Text>
                  </Stack>
                </Row>
                <Button className="bg-blue_800 font-bold lg:mr-[594px] xl:mr-[679px] mr-[764px] 3xl:mr-[917px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[28%]">
                  Send Assessment
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MentorshomePage;
