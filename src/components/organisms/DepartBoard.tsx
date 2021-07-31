import DepartKanban from '../molecules/DepartKanban'
// Import { depList } from '../../../public/staticData'

export default function DepartBoard({ depList }: { depList: any }) {
	return (
		<div className="w-full sm:overflow-x-auto sm:overflow-y-hidden md:overflow-x-auto md:overflow-y-hidden">
			<div
				className="
      sm:grid sm:grid-cols-4 sm:grid-flow-row sm:gap-6 sm:w-[900px]
      md:grid md:grid-cols-4 md:grid-flow-row md:gap-6 md:w-[1200px]
      lg:grid lg:grid-cols-3 lg:gap-6
      xl:grid xl:grid-cols-3 xl:gap-6
      2xl:grid 2xl:grid-cols-4 2xl:gap-8
      "
			>
				{depList.map((dep: any, idx: number) => (
					<div key={idx + 1} className="flex justify-self-center self-center">
						<DepartKanban pageUrl={dep.path}>
							{dep.departmentNameInJapanese}
						</DepartKanban>
					</div>
				))}
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
				<div className="flex justify-self-center self-center">
					<DepartKanban>デコイ</DepartKanban>
				</div>
			</div>
		</div>
	)
}
