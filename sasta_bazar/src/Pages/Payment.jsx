import {
  Box,
  Text,
  Image,
  Button,
  Checkbox,
  Input,
  Select,
  useDisclosure,
  Alert,
  AlertIcon,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/ShoppingCom/Navbar";
import { orderPlacedSuccess } from "../Redux/CartReducer/action";
import { store } from "../Redux/store";

const Payment = () => {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false);
  const [check, setCheck] = useState(false);
  const [totalcost, setTotalcost] = useState(0);

  const navigate = useNavigate();
  const cart = useSelector((store) => {
    return store.CartReducer.cart;
  });
  const handleproceed = () => {
    dispatch(orderPlacedSuccess(cart))
    alert("Purchase Sucessful");
    navigate("/shop");
  };
  
  useEffect(() => {
    cart && cart.map((e) => setTotalcost((prev) => prev + e.price));
  }, []);
  // console.log(totalcost);
  return (
    <>
      <Navbar />
      <Box height={"auto"} bg={"#F3F7FB"}>
        <Box height={"auto"} bg={"#F3F7FB"}>
          <Box
            display={"flex"}
            gap={8}
            mt={5}
            width={"76%"}
            ml={125}
            height={"auto"}
          >
            <Box
              bg={"#F3F7FB"}
              p={0}
              rounded={"lg"}
              height={"auto"}
              width={"100%"}
            >
              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}>PREFERRED PAYMENT</Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      height={30}
                      src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png"
                      alt="paytm"
                    />
                    <Text pt={1}>Paytm</Text>
                    <Text></Text>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Link to="/">LINK</Link>{" "}
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> OTHER PAYMENTS </Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      height={30}
                      src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png"
                      alt="paytm"
                    />
                    <Text pt={1}> PhonePe </Text>
                    <Text></Text>
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent={"end"}
                        pt={3}
                        fontSize={"smaller"}
                      >
                        {" "}
                        <Checkbox pl={10} onChange={(e) => setCheck(!check)} />
                      </Box>
                      <Box>
                        {!check ? (
                          <Box></Box>
                        ) : (
                          <Button mt={3} mr={0} bg={"#24AEB1"} color={"white"}>
                            SAVE CARD
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> UPI </Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      height={30}
                      src="	https://www.netmeds.com/assets/pgicon/googlepaylogo.png"
                      alt="paytm"
                    />
                    <Text pt={1}>Google Pay </Text>
                    <Text></Text>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Checkbox />{" "}
                  </Box>
                </Box>
              </Box>
              <Box
                fontSize={"smaller"}
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={5}>
                    <Image
                      height={30}
                      src="https://www.netmeds.com/assets/pgicon/COD.png"
                      alt="paytm"
                    />
                    <Box>
                      <Text pt={1}>Cash On Delivery </Text>
                      <Text>
                        Hear us out! Pay online and earn 100% NMS SuperCash (up
                        to Rs. 3000) on all prepaid orders
                      </Text>
                    </Box>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    <Checkbox />
                  </Box>
                </Box>
              </Box>
              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> CREDIT CARDS & DEBIT CARDS </Text>
                <Box textAlign={"center"} mt={4} borderTop={"1px solid grey"}>
                  {!flag ? (
                    <Button
                      border={"none"}
                      bg={"white"}
                      onClick={() => setFlag(true)}
                    >
                      ADD NEW CARD
                    </Button>
                  ) : (
                    <>
                      <Box textAlign={"left"}>
                        <Text mb={3} fontSize={"sm"}>
                          ENTER CARD DETAILS
                        </Text>
                        <Text color={"#24AEB1"}>CARD NUMBER</Text>
                        <Input mb={3} variant="flushed" type={"number"} />
                        <Box display={"flex"} gap={2}>
                          <Box>
                            <Text color={"#24AEB1"}>EXPIRY DATE</Text>
                            <Input
                              mb={3}
                              width={150}
                              placeholder={"MM"}
                              variant="flushed"
                              type={"number"}
                            />
                          </Box>
                          <Box>
                            <Input
                              mb={3}
                              mt={6}
                              width={150}
                              placeholder={"YY"}
                              variant="flushed"
                              type={"number"}
                            />
                          </Box>
                          <Box>
                            <Text color={"#24AEB1"}>CVV</Text>
                            <Input
                              mb={3}
                              width={150}
                              variant="flushed"
                              type={"number"}
                            />
                          </Box>
                        </Box>
                        <Box>
                          <Text color={"#24AEB1"}>NAME ON CARD</Text>
                          <Input
                            mb={3}
                            width={150}
                            variant="flushed"
                            type={"text"}
                          />
                        </Box>
                        <Box display={"flex"} mb={6} gap={8}>
                          <Checkbox />
                          <Text>Save this card for future payments. </Text>
                        </Box>

                        <Button bg={"#24AEB1"}>PAY</Button>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>

              <Box
                bg={"teal"}
                mt={8}
                p={0}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Box
                  bg={"white"}
                  mt={8}
                  p={0}
                  rounded={"lg"}
                  height={"auto"}
                  width={"100%"}
                >
                  <Text p={3} fontSize={"smaller"}>
                    NET BANKING{" "}
                  </Text>
                  <Box
                    display={"flex"}
                    pt={3}
                    gap={8}
                    justifyContent={"space-around"}
                  >
                    <Box>
                      <Image
                        pl={2}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/axis.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        Axis Bank
                      </Text>
                    </Box>

                    <Box>
                      <Image
                        pl={2}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/Hdfc.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        HDFC Bank
                      </Text>
                    </Box>
                    <Box>
                      <Image
                        pl={1}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/icici.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        ICICI Bank
                      </Text>
                    </Box>
                    <Box>
                      <Image
                        pl={2}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/kotak.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        Kotak Bank
                      </Text>
                    </Box>
                    <Box>
                      <Image
                        pl={7}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/Sbi.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        State Bank of India
                      </Text>
                    </Box>
                  </Box>
                  <Select
                    p={3}
                    width={200}
                    placeholder="More Banks"
                    size={"sm"}
                  >
                    <option value="option1">Bank of Maharashtra</option>
                    <option value="option2">Central Bnak of India </option>
                    <option value="option3">Abhyudaya Co-Op Bank</option>
                    <option value="option2">Central Bank of India </option>
                    <option value="option3">Yes Bank</option>
                    <option value="option3">Union Bank</option>
                    <option value="option3">Canara Bank</option>
                  </Select>
                </Box>
              </Box>
            </Box>

            <Box
              bg={"white"}
              rounded={"lg"}
              p={5}
              pr={8}
              width={470}
              height={"260px"}
              mt="5"
            >
              <Text mb={1} color={"grey"} fontSize={"sm"}>
                PAYMENT DETAILS
              </Text>
              <Box
                fontSize={"sm"}
                mt={3}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Text> MRP Total</Text>
                <Text>Rs {totalcost}.00</Text>
              </Box>
              <Box
                fontSize={"sm"}
                mt={3}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Text>Discount</Text>
                <Text>-Rs 00.00</Text>
              </Box>
              <Box
                fontSize={"sm"}
                fontWeight={500}
                mt={3}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Text>Total Amount*</Text>
                <Text>Rs Rs {totalcost}.00</Text>
              </Box>

              <Box
                p={2}
                fontWeight={500}
                bg={"white"}
                mt={5}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Box>
                  <Text fontSize={"xs"}>TOTAL AMOUNT </Text>
                  <Text fontSize={"larger"}>Rs {totalcost}.00</Text>
                </Box>

                <Box>
                  <Button
                    onClick={handleproceed}
                    bg="#11025b"
                    color="white"
                    size={"lg"}
                  >
                    PROCEED
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
