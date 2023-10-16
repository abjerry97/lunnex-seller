import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import HomeChart from "@/components/charts/HomeChart";
import WithdrawIcon from "@/assets/icons/WithdrawIcon";
import PlusActive from "@/assets/icons/PlusActive";
import TransferIcon from "@/assets/icons/TransferIcon";
import PageBtn from "@/components/PageBtn/PageBtn";
import EyeOffIcon from "@/assets/icons/EyeOffIcon";
import DailyTaskIcon from "@/assets/icons/DailyTaskIcon";
import Image from "next/image";
import SelectBox from "@/components/SelectBox/SelectBox";

export default function Wallet() {
  return (
    <DashboardLayout>
      <div className="block lg:flex gap-4">
        <div className="w-full lg:w-8/12 ">
          <div className="block lg:flex gap-4">
            <div className="w-full lg:w-6/12 rounded bg-[#FCFCFC] p-4 shadow my-2">
              <p className="text-sm">Sales Earnings</p>
              <h1 className="font-semibold text-xl">N200,540</h1>

              <div className=" mt-6 text-xs border border-[#1B6F0E] w-fit text-[#1B6F0E] bg-[#D4F6CF] rounded shadow p-1">
                +2.8%
              </div>
            </div>
            <div className="w-full lg:w-6/12 rounded bg-[#FCFCFC] p-4 shadow my-2">
              <p className="text-sm">Tasks Earnings</p>
              <h1 className="font-semibold text-xl">N33,500</h1>

              <div className=" mt-6 text-xs border border-[#1B6F0E] w-fit text-[#1B6F0E] bg-[#D4F6CF] rounded shadow p-1">
                +1.2%
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className=" mb-4 w-full  shadow p-4 bg-[#FCFCFC] min-h-6 h-fit  rounded-xl">
              <div className="flex justify-between mb-4 items-center">
                <h4 className="font-bold text-lg">Revenue</h4>
                <SelectBox/>
              </div>
              <div className="">
                <HomeChart />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-[#FCFCFC] rounded p-4 shadow">
              <div className="flex justify-between  ">
                <h1>Transactions</h1>
                <SelectBox/>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-4 text-sm border-b p-2">
                  <div className="h-8 w-8 rounded-full bg-[#D0D0FB]"></div>
                  <p>Lorem Ipsum dolor Sit Amet</p>
                </div>
                <div className="flex items-center gap-4 text-sm border-b p-2">
                  <div className="h-8 w-8 rounded-full bg-[#D0D0FB]"></div>
                  <p>Lorem Ipsum dolor Sit Amet</p>
                </div>
                <div className="flex items-center gap-4 text-sm border-b p-2">
                  <div className="h-8 w-8 rounded-full bg-[#D0D0FB]"></div>
                  <p>Lorem Ipsum dolor Sit Amet</p>
                </div>
                <div className="flex items-center gap-4 text-sm border-b p-2">
                  <div className="h-8 w-8 rounded-full bg-[#D0D0FB]"></div>
                  <p>Lorem Ipsum dolor Sit Amet</p>
                </div>
                <div className="flex items-center gap-4 text-sm border-b p-2">
                  <div className="h-8 w-8 rounded-full bg-[#D0D0FB]"></div>
                  <p>Lorem Ipsum dolor Sit Amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 my-2">
          <div className="rounded-xl bg-[#FCFCFC] text-center p-8 shadow mb-4 flex flex-col items-center">
            <p className="text-sm">Total Earnings</p>
            <div className="flex items-center gap-1 text-center">
              {" "}
              <h1 className="text-3xl font-semibold">N234,040:00</h1>
              <EyeOffIcon />
            </div>

            <div className="mt-4 flex justify-between text-sm gap-10 mt-8">
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-[#26264C] flex items-center justify-center p-2 mb-1">
                  <WithdrawIcon />
                </div>
                <p className="text-xs">Withdraw</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-[#26264C] flex items-center justify-center p-2 mb-1">
                  <PlusActive />
                </div>
                <p className="text-xs">Deposit</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-[#26264C] flex items-center justify-center p-2 mb-1">
                  <TransferIcon />
                </div>
                <p className="text-xs">Transfer</p>
              </div>
            </div>

            <div className="mt-8">
              <PageBtn><div className="flex items-center justify-center gap-4 px-4"> <p>Daily Task</p><DailyTaskIcon/></div></PageBtn>
            </div>
          </div>

          <div className="rounded-xl bg-[#FCFCFC] overflow-hidden shadow mb-4">
            <div className="bg-[#D0D0FB] p-2"> Daily tasks</div>
            <div className="text-xs">
              <ul className="flex justify-between px-2 my-2">
                <li>S</li>
                <li>M</li>
                <li>T</li>
                <li>W</li>
                <li>T</li>
                <li>F</li>
                <li>S</li>
              </ul>
              <ul className="flex justify-between px-2 py-4 mb-4">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-[#FCFCFC] shadow mb-4 p-4">
            <p>Sponsored ad</p>
            <div className="rounded">
              <Image src="/images/sponsored-ad.png" alt="" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
