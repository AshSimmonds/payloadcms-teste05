import React from 'react';
import { Banner, Check } from 'payload/components';

import './index.scss';

const baseClass = 'before-dashboard';

const BeforeDashboard: React.FC = () => {
	return (
		<div className={baseClass}>
			<Banner type="success">
				<Check />
				<strong>Cleared for blast-off.</strong><br />
				<br />
				<small>Customise this in: <pre><a href="https://github.com/AshSimmonds/payloadcms-teste05/tree/master/src/components/BeforeDashboard" >src\components\BeforeDashboard\index.tsx</a></pre></small>
			</Banner>
		</div>
	);
};

export default BeforeDashboard;
