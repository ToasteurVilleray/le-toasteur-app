import React from "react";
import Link from "next/link";
import Image from "next/image";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import DrinksBis from "../../components/ui/menu/DrinksBis";
import logoBlue from "../../public/images/logos/logo-toasteur-villeray-navy.png";
import classes from "../../components/ui/menu/DrinksBis.module.css";
import toastOrange from "../../public/images/logos/illustration-house-orange.png";

/**
 * @typedef {import("@prismicio/client").Content.DrinksMenuSlice} DrinksMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DrinksMenuSlice>} DrinksMenuProps
 * @param { DrinksMenuProps }
 */
const DrinksMenu = ({ slice }) => (
	<section className={classes["section-drinks-menu"]}>
		<div className={`${classes["menu-grid"]} ${"container"}`}>
			<div className={classes["box-text"]}>
				<div className={classes["left-side"]}>
					{/* <h2>BOISSON</h2> */}
					<PrismicRichText field={slice.primary.title} />
					<span>{slice.primary.description}</span>
				</div>
				<div className={classes["right-side-illustration"]}>
					<PrismicNextImage
						field={slice.primary.illustration}
						alt={slice.primary.illustration}
						className="Illustration Le Toasyeut"
						layout="responsive"
					/>
				</div>
			</div>
			<div className={classes["menu-list"]}>
				<div className={classes["left-grid"]}>
					{/* ***************First box BLOCK ONEEE :*/}
					<div className={classes["upper-box"]}>
						<span>{slice.primary.simpledouble}</span>
						{/** item **/}
						{slice.primary.topdrinktitle1.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle1} />
									<span>{slice.primary.topdrinkprice1}</span>
								</div>
								{slice.primary.topdrinkdescription1 && (
									<p>{slice.primary.topdrinkdescription1}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle2.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle2} />
									<span>{slice.primary.topdrinkprice2}</span>
								</div>
								{slice.primary.topdrinkdescription2 && (
									<p>{slice.primary.topdrinkdescription2}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle3.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle3} />
									<span>{slice.primary.topdrinkprice3}</span>
								</div>
								{slice.primary.topdrinkdescription3 && (
									<p>{slice.primary.topdrinkdescription3}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle4.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle4} />
									<span>{slice.primary.topdrinkprice4}</span>
								</div>
								{slice.primary.topdrinkdescription4 && (
									<p>{slice.primary.topdrinkdescription4}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle5.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle5} />
									<span>{slice.primary.topdrinkprice5}</span>
								</div>
								{slice.primary.topdrinkdescription5 && (
									<p>{slice.primary.topdrinkdescription5}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle6.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle6} />
									<span>{slice.primary.topdrinkprice6}</span>
								</div>
								{slice.primary.topdrinkdescription6 && (
									<p>{slice.primary.topdrinkdescription6}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle7.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle7} />
									<span>{slice.primary.topdrinkprice7}</span>
								</div>
								{slice.primary.topdrinkdescription7 && (
									<p>{slice.primary.topdrinkdescription7}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle8.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle8} />
									<span>{slice.primary.topdrinkprice8}</span>
								</div>
								{slice.primary.topdrinkdescription8 && (
									<p>{slice.primary.topdrinkdescription8}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle9.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle9} />
									<span>{slice.primary.topdrinkprice9}</span>
								</div>
								{slice.primary.topdrinkdescription9 && (
									<p>{slice.primary.topdrinkdescription9}</p>
								)}
							</div>
						)}
						{/** item **/}
						{slice.primary.topdrinktitle10.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.topdrinktitle10} />
									<span>{slice.primary.topdrinkprice10}</span>
								</div>
								{slice.primary.topdrinkdescription10 && (
									<p>{slice.primary.topdrinkdescription10}</p>
								)}
							</div>
						)}
					</div>

					{/* BOTTOM BOX HEEERE */}
					<div className={classes["bottom-box"]}>
						{/** item **/}
						{slice.primary.btmdrinktitle1.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle1} />
									<span>{slice.primary.btmdrinkprice1}</span>
								</div>
								{slice.primary.btmdrinkdescription1 && (
									<p>{slice.primary.btmdrinkdescription1}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle2.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle2} />
									<span>{slice.primary.btmdrinkprice2}</span>
								</div>
								{slice.primary.btmdrinkdescription2 && (
									<p>{slice.primary.btmdrinkdescription2}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle3.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle3} />
									<span>{slice.primary.btmdrinkprice3}</span>
								</div>
								{slice.primary.btmdrinkdescription3 && (
									<p>{slice.primary.btmdrinkdescription3}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle4.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle4} />
									<span>{slice.primary.btmdrinkprice4}</span>
								</div>
								{slice.primary.btmdrinkdescription4 && (
									<p>{slice.primary.btmdrinkdescription4}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle5.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle5} />
									<span>{slice.primary.btmdrinkprice5}</span>
								</div>
								{slice.primary.btmdrinkdescription5 && (
									<p>{slice.primary.btmdrinkdescription5}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle6.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle6} />
									<span>{slice.primary.btmdrinkprice6}</span>
								</div>
								{slice.primary.btmdrinkdescription6 && (
									<p>{slice.primary.btmdrinkdescription6}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle7.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle7} />
									<span>{slice.primary.btmdrinkprice7}</span>
								</div>
								{slice.primary.btmdrinkdescription7 && (
									<p>{slice.primary.btmdrinkdescription7}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle8.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle8} />
									<span>{slice.primary.btmdrinkprice8}</span>
								</div>
								{slice.primary.btmdrinkdescription8 && (
									<p>{slice.primary.btmdrinkdescription8}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle9.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle9} />
									<span>{slice.primary.btmdrinkprice9}</span>
								</div>
								{slice.primary.btmdrinkdescription9 && (
									<p>{slice.primary.btmdrinkdescription9}</p>
								)}
							</div>
						)}

						{/** item **/}
						{slice.primary.btmdrinktitle10.length > 0 && (
							<div className={classes["item-card"]}>
								<div className={classes["title-row"]}>
									<PrismicRichText field={slice.primary.btmdrinktitle10} />
									<span>{slice.primary.btmdrinkprice10}</span>
								</div>
								{slice.primary.btmdrinkdescription10 && (
									<p>{slice.primary.btmdrinkdescription10}</p>
								)}
							</div>
						)}
					</div>
				</div>

				{/* RIGHT GRID HERE */}
				<div className={classes["right-grid"]}>
					{slice?.items?.map((item, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<React.Fragment key={i}>
							<div className={classes["item-card"]}>
								<div className={classes["title-row-right"]}>
									<PrismicRichText field={item.drinktitle} />
									<span>{item.price}</span>
								</div>
								<span>{item.description}</span>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
			{/* biome-ignore lint/complexity/useLiteralKeys: <explanation> */}
			<div className={classes["sentence"]}>
				<span>{slice.primary.instruction}</span>
			</div>
		</div>

		<div className={classes["logo-box"]}>
			<Image
				className={classes["logo-blue-transparent"]}
				src={logoBlue}
				alt="test"
				// layout="fill"
				// width={207}
				// height={106}
			/>
		</div>
	</section>
);

export default DrinksMenu;
