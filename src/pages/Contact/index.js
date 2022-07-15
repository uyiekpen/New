import React from "react";

import {
  Column,
  Stack,
  Image,
  Row,
  Text,
  Button,
  Line,
  Input,
} from "components";

const ContactPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Stack className="lg:h-[1016px] xl:h-[1162px] 2xl:h-[1307px] 3xl:h-[1568px] h-[1741px] w-[100%]">
          <Stack className="absolute lg:h-[582px] xl:h-[666px] 2xl:h-[749px] 3xl:h-[898px] h-[997px] inset-x-[0] top-[6%] w-[100%]">
            <Image
              src={"images/img_rectangle3432.png"}
              className="absolute lg:h-[582px] xl:h-[666px] 2xl:h-[749px] 3xl:h-[898px] h-[997px] object-cover w-[100%]"
              alt="Rectangle3432"
            />
            <div className="absolute bg-gray_900_72 lg:h-[576px] xl:h-[658px] 2xl:h-[741px] 3xl:h-[888px] h-[986px] inset-[0] justify-center m-[auto] w-[100%]"></div>
          </Stack>
          <header className="absolute w-[100%]">
            <Row className="bg-gray_900 items-center justify-start lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] w-[100%]">
              <Image
                src={"images/img_whiteinnotals_13.png"}
                className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] ml-[100px] lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] object-contain w-[9%]"
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
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                About us
              </Text>
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                Contact
              </Text>
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] ml-[264px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                Hire Talent
              </Text>
              <Button className="bg-blue_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] py-[16px] lg:py-[9px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[9%]">
                Sign up
              </Button>
            </Row>
          </header>
          <Column className="absolute bg-white_A700 inset-x-[0] items-start justify-start mx-[auto] lg:p-[51px] xl:p-[58px] 2xl:p-[66px] 3xl:p-[79px] p-[88px] rounded-radius20 shadow-bs19 w-[72%]">
            <Text className="font-normal lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 w-[auto]">
              Contact
            </Text>
            <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] rounded-radius5 w-[16%]"></div>
            <Text className="font-normal lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mt-[50px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] mt-[87px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_cc w-[auto]">
              Email address
            </Text>
            <div className="3xl:h-[112px] h-[124px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] outline outline-[1px] outline-gray_900 rounded-radius10 w-[92%]"></div>
            <Text className="font-normal lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_cc w-[auto]">
              Message
            </Text>
            <div className="lg:h-[152px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[234px] h-[259px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] outline outline-[1px] outline-gray_900 rounded-radius10 w-[92%]"></div>
            <Button className="bg-blue_800 font-bold lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mt-[50px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] mt-[87px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius10 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[26%]">
              Send Message
            </Button>
          </Column>
        </Stack>
        <Column className="bg-gray_901 justify-start lg:mt-[221px] xl:mt-[253px] 2xl:mt-[285px] 3xl:mt-[342px] mt-[380px] lg:p-[33px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] p-[57px] w-[87%]">
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
        <footer className="bg-gray_900 lg:mt-[151px] xl:mt-[173px] 2xl:mt-[195px] 3xl:mt-[234px] mt-[260px] w-[100%]">
          <Column className="justify-start 3xl:ml-[108px] ml-[120px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] xl:mr-[114px] 2xl:mr-[128px] 3xl:mr-[153px] mr-[171px] lg:mr-[99px] lg:my-[47px] xl:my-[54px] 2xl:my-[60px] 3xl:my-[72px] my-[81px] w-[85%]">
            <Image
              src={"images/img_whiteinnotals_14.png"}
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
                  src={"images/img_vector_64.png"}
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
                  src={"images/img_vector_65.png"}
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[36px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] object-contain w-[5%]"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_66.png"}
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] mb-[0] lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] ml-[43px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] object-contain w-[5%]"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_67.png"}
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
                name="Group415"
                placeholder="Enter email address"
              ></Input>
              <Button className="bg-blue_800 font-bold font-inter lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] ml-[560px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] 2xl:py-[10px] 3xl:py-[12px] py-[14px] lg:py-[8px] xl:py-[9px] rounded-radius10 shadow-bs4 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[16%]">
                Subscribe
              </Button>
            </Column>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ContactPage;
