/*  omame's website
 *  Copyright (C) 2022 omame <me@omame.xyz>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import PageWrapper from '@/components/PageWrapper'
import tw from 'twin.macro'
import { Outlet, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import '@fontsource/rubik/500.css'

const Professional = React.lazy(() => import('@/components/pages/projects/Professional'))

const ProjectsIndex = (): JSX.Element => (
	<PageWrapper title="projects" styleChildren={false}>
		<div css={tw`flex flex-wrap gap-4 justify-center`}>
			<Link to="professional">
				<div css={tw`flex flex-col justify-center items-center text-gray-600 bg-gray-200 border border-white
				hover:(text-gray-800 bg-gray-100 shadow-xl) shadow-md w-72 h-32 rounded-xl transition-colors duration-200 ease-in-out`}>
					<p>omame&apos;s</p>
					<p css={tw`text-3xl font-medium`}>Professional</p>
				</div>
			</Link>
		</div>
	</PageWrapper>
)

const Projects = (): JSX.Element => {
	return (
		<>
			<Routes>
				<Route path="professional" element={<Professional />} />
				<Route index element={<ProjectsIndex />} />
			</Routes>
			<Outlet />
		</>
	)
}

export default Projects
