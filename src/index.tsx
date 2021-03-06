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

import App from '@/App'
import React from 'react'
import { render } from 'preact'
import { GlobalStyles } from 'twin.macro'
import '@fontsource/rubik'
import '@fontsource/rubik/300.css'
import CustomGlobalStyles from '@/components/CustomGlobalStyles'

render(
	<>
		<GlobalStyles />
		<CustomGlobalStyles />
		<App />
	</>,
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	document.getElementById('root')!
)
